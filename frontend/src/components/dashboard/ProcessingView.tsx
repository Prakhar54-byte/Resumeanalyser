'use client'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

// You can insert a Canvas here if you want 3D, 
// but for "Processing" a sleek terminal log effect is often better for UX.

export function ProcessingView() {
  return (
    <div className="flex flex-col items-center gap-6">
      
      {/* Animated Pulse */}
      <div className="relative">
        <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 animate-pulse rounded-full"></div>
        <Loader2 className="w-16 h-16 text-blue-500 animate-spin relative z-10" />
      </div>

      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Analyzing Resume...</h2>
        <div className="h-[20px] overflow-hidden">
             {/* Simulated Terminal Logs */}
            <LogsAnimation /> 
        </div>
      </div>
    </div>
  )
}

function LogsAnimation() {
  // Simple component that cycles through text
  return (
    <motion.div 
      animate={{ y: [0, -20, -40, -60] }} 
      transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
      className="text-slate-400 text-sm flex flex-col gap-1"
    >
      <p>Extracting text layers...</p>
      <p>Running NER models...</p>
      <p>Comparing against JD...</p>
      <p>Finalizing score...</p>
    </motion.div>
  )
}