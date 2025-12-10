export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">
          How it works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center space-y-4">
                <div className="text-6xl font-black text-slate-800">01</div>
                <h3 className="text-xl font-bold text-white">Upload PDF</h3>
                <p className="text-slate-400">Drag and drop your resume. We support PDF and Docx formats.</p>
            </div>
            {/* Step 2 */}
            <div className="text-center space-y-4">
                <div className="text-6xl font-black text-slate-800">02</div>
                <h3 className="text-xl font-bold text-white">AI Scan</h3>
                <p className="text-slate-400">Our engine extracts keywords and compares them to the job market.</p>
            </div>
            {/* Step 3 */}
            <div className="text-center space-y-4">
                <div className="text-6xl font-black text-slate-800">03</div>
                <h3 className="text-xl font-bold text-white">Get Results</h3>
                <p className="text-slate-400">View your score and actionable tips to improve your CV instantly.</p>
            </div>
        </div>
      </div>
    </section>
  )
}