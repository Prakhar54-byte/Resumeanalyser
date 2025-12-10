'use client';

import { useCallback } from "react";

import { useDropzone } from "react-dropzone";
import{motion,AnimatePresence} from 'framer-motion'
import {UploadCloud} from 'lucide-react'

export function UploadZone(){
    const onDrop = useCallback((acceptedFiles:File[]) =>{
        console.log("File uploaded:",acceptedFiles[0])
        //Call the API to upload the file
        // TODO: Implement file upload logic here
    },[])
    
    const {getRootProps,getInputProps,isDragActive} = useDropzone({onDrop,accept:{'application/pdf':['.pdf']},maxFiles:1});
        return (
    <div {...getRootProps()} className="cursor-pointer w-full max-w-2xl mx-auto">
      <input {...getInputProps()} />
      <motion.div
        layout
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center transition-colors 
          ${isDragActive ? 'border-primary bg-primary/10' : 'border-slate-700 bg-slate-900/50 hover:bg-slate-900'}`}
      >
        <div className="p-4 bg-slate-800 rounded-full mb-4">
            <UploadCloud className={`w-8 h-8 ${isDragActive ? 'text-primary' : 'text-slate-400'}`} />
        </div>
        <h3 className="text-xl font-bold text-white">
          {isDragActive ? "Drop the resume here..." : "Upload Resume (PDF)"}
        </h3>
        <p className="text-slate-400 mt-2 text-sm">
          Drag & drop or click to browse. Max size 5MB.
        </p>
      </motion.div>
    </div>
  )
}