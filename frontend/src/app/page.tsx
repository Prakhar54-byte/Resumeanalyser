import HeroBackground from "../components/3D/HeroBackground";
import { UploadZone } from "../components/dashboard/UploadZone";
import { Button } from '../components/ui/button'

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center">
      
      {/* 1. The 3D Layer */}
      <HeroBackground />

      {/* 2. The Content Layer (Glassmorphism) */}
      <div className="z-10 text-center space-y-8 p-8 backdrop-blur-sm rounded-3xl border border-white/10 bg-black/20 shadow-2xl max-w-4xl w-full">
        
        <div className="space-y-2">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            AI Resume Analyzer
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
            Optimize your CV for ATS using advanced NLP. Get instant feedback on skills, formatting, and relevance.
          </p>
        </div>

        {/* The Interactive Component */}
        <UploadZone />

        <div className="flex gap-4 justify-center pt-4">
           {/* Shadcn Buttons */}
          <Button variant="outline" className="border-slate-600 text-white hover:bg-white/10">
            View Demo
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Get Started
          </Button>
        </div>

      </div>
    </main>
  )
}