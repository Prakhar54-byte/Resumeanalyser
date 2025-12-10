'use client'

import { useScanStore } from "../../store/useScanStore"
import {UploadZone} from '../../components/dashboard/UploadZone'
import {ProcessingView} form '../../components/dashboard/ProcessingView'
import {AnalysisView} from '../../components/dashboard/AnalysisView'


export default function AnalyzePage() {
  const { stage } = useScanStore();

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <header className="mb-12 flex justify-between items-center">
           <h1 className="text-2xl font-bold tracking-tight">ResumeAI</h1>
        </header>

        {/* Dynamic View Switching */}
        <div className="min-h-[600px] flex items-center justify-center">
          
          {stage === 'idle' && (
             <UploadZone /> // The Drag & Drop component we made earlier
          )}

          {(stage === 'uploading' || stage === 'processing') && (
             <ProcessingView /> // Cool Three.js Loader
          )}

          {stage === 'complete' && (
             <AnalysisView /> // The Charts & Data
          )}

          {stage === 'error' && (
             <div className="text-red-500 text-xl">Something went wrong. Try again.</div>
          )}

        </div>
      </div>
    </main>
  )
}