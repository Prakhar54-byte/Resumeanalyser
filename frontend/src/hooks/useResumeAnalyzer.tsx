import { useState,useRef, use } from "react";

import { useScanStore } from "../store/useScanStore";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export function useResumeAnalyzer(){
    const store = useScanStore();
    const pollInterval = useRef<NodeJS.Timeout | null>(null);

    // Upload logic 

    const analyzeFile = async(file:File)=>{
        try {
            store.setStage('scanning');
            const formData = new FormData();

            formData.append('file',file);

            const {data} = await axios.post(`${API_URL}/upload`,formData)

            store.setTaskId(data.task_id);
            store.setStage('analyzing');

            // Polling for result
            pollInterval.current = setInterval(async()=>{
                try {
                    const res = await axios.get(`${API_URL}/result/${data.task_id}`);
                    if(res.data.status === 'completed'){
                        store.setResult(res.data.result);
                        store.setStage('completed');
                        if(pollInterval.current){
                            clearInterval(pollInterval.current);
                        }
                    } else if(res.data.status === 'error'){
                        store.setStage('error');
                        if(pollInterval.current){
                            clearInterval(pollInterval.current);
                        }
                    }
                } catch (error) {
                    console.error("Error fetching result:",error);
                    store.setStage('error');
                    if(pollInterval.current){
                        clearInterval(pollInterval.current);
                    }
                }
            },2000);
        } catch (error) {
            console.error("Error uploading file:",error);
            store.setStage('error');
        }
    }


    const startPolling = (taskId:string) =>{
        pollInterval.current = setInterval(async()=>{
            try {
                const {data} = await axios.get(`${API_URL}/result/${taskId}`);
                if(data.status === 'completed'){
                    store.setResult(data.result);
                    store.setStage('completed');
                    if(pollInterval.current){
                        clearInterval(pollInterval.current);
                    }
                } else if(data.status === 'error'){
                    store.setStage('error');
                    if(pollInterval.current){
                        clearInterval(pollInterval.current);
                    }
                }
            } catch (error) {
                console.error("Error fetching result:",error);
                store.setStage('error');
                if(pollInterval.current){
                    clearInterval(pollInterval.current);
                }
            }
        },2000);
    }
    return {
        analyzeFile,
        startPolling,
        ...store
    }
}