This is the most critical part of the project: the **Handshake** between your Frontend and your friend's Backend.

Here is the map of exactly **where** the API calls are in your code, **what** data you are sending, and **what** your friend needs to send back.

-----

### The Architecture: "The Waiter Pattern"

Since AI analysis takes time (5-10 seconds), we don't just send a file and wait. We use a **3-step process**:

1.  **Upload:** You give the file to the backend. Backend gives you a ticket number (`task_id`).
2.  **Poll (Check Status):** You keep asking "Is ticket \#123 ready?" every 2 seconds.
3.  **Fetch Result:** Once the backend says "Yes, it's ready", you ask for the final report.

-----

### API Call \#1: Upload the Resume

**Where is this in your Frontend?**

  * **File:** `src/hooks/useResumeAnalyzer.ts`
  * **Function:** `analyzeFile(file)`
  * **Line:** `await axios.post(...)`

**What the Backend needs to handle:**

  * **Method:** `POST`
  * **Endpoint:** `/api/v1/resume/upload`
  * **Input (Request):** `multipart/form-data`
      * Key: `file` (The PDF file object)
  * **Output (Response):**
    ```json
    {
      "task_id": "550e8400-e29b-41d4-a716-446655440000",
      "status": "processing",
      "message": "Upload successful, analysis started."
    }
    ```

-----

### API Call \#2: Check Status (The Polling)

**Where is this in your Frontend?**

  * **File:** `src/hooks/useResumeAnalyzer.ts`
  * **Function:** `startPolling(taskId)`
  * **Line:** `await axios.get(...)` inside the `setInterval` loop.

**What the Backend needs to handle:**

  * **Method:** `GET`
  * **Endpoint:** `/api/v1/resume/status/{task_id}`
  * **Input (Request):** The `task_id` is in the URL.
  * **Output (Response):**
      * *Scenario A (Still Working):*
        ```json
        { "status": "processing" }
        ```
      * *Scenario B (Done):*
        ```json
        { "status": "completed" }
        ```
      * *Scenario C (Error):*
        ```json
        { "status": "failed", "error": "Could not read PDF" }
        ```

-----

### API Call \#3: Get Final Results

**Where is this in your Frontend?**

  * **File:** `src/hooks/useResumeAnalyzer.ts`
  * **Function:** Inside `startPolling`, immediately after receiving `status: 'completed'`.

**What the Backend needs to handle:**

  * **Method:** `GET`
  * **Endpoint:** `/api/v1/resume/result/{task_id}`
  * **Input (Request):** The `task_id` is in the URL.
  * **Output (Response):** The **BIG** JSON object that powers your dashboard.
    ```json
    {
      "id": "550e8400...",
      "overall_score": 78,
      "summary_text": "Strong technical background but formatting needs work.",
      "technical_skills": ["React", "Next.js", "Python", "Docker"],
      "soft_skills": ["Leadership", "Communication"],
      "missing_keywords": ["TypeScript", "CI/CD", "AWS"],
      "formatting_issues": ["Margins too narrow", "No email found"]
    }
    ```

-----

### Summary Sheet for Your Friend (Backend Developer)

Copy and paste this section below and send it to your friend. It is the **API Contract**.

> **Frontend Requirements (API Contract)**
>
> **1. POST `/api/v1/resume/upload`**
>
>   * **Receives:** Form Data (`file`: binary PDF).
>   * **Returns:** `{"task_id": "string", "status": "processing"}`.
>   * **Action:** Save file, start async task, return ID immediately.
>
> **2. GET `/api/v1/resume/status/{task_id}`**
>
>   * **Receives:** `task_id` in URL.
>   * **Returns:** `{"status": "processing" | "completed" | "failed"}`.
>
> **3. GET `/api/v1/resume/result/{task_id}`**
>
>   * **Receives:** `task_id` in URL.
>   * **Returns:**
>     ```json
>     {
>       "overall_score": 0-100,
>       "technical_skills": ["skill1", "skill2"],
>       "missing_keywords": ["missing1", "missing2"],
>       "summary_text": "string"
>     }
>     ```
>
> **Important:** Please enable **CORS** for `http://localhost:3000` or the frontend requests will be blocked.

-----

### Where to configure the API URL?

In your Frontend code, you need to tell axios where the backend lives.
Create a file `.env.local` in your root folder:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

And in your `src/hooks/useResumeAnalyzer.ts`:

```typescript
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
``` 


This for backend 