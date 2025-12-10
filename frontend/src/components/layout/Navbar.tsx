'use client'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Github } from 'lucide-react' // Import Github icon
import Link from 'next/link'

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/20 backdrop-blur-md"
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">R</div>
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          ResumeAI
        </span>
      </div>

      {/* Links (No Pricing) */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
        <Link href="#features" className="hover:text-white transition-colors">Features</Link>
        <Link href="#how-it-works" className="hover:text-white transition-colors">How it Works</Link>
        <Link href="https://github.com/Prakhar54-byte/Resumeanalyser" target="_blank" className="hover:text-white transition-colors flex items-center gap-2">
          <Github className="w-4 h-4" /> Open Source
        </Link>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4">
        <Button className="bg-white text-black hover:bg-slate-200 rounded-full px-6 font-semibold">
          Analyze for Free
        </Button>
      </div>
    </motion.nav>
  )
}