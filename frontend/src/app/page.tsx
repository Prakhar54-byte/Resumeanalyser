import HeroBackground from '@/components/3D/HeroBackground'
import { Navbar } from '@/components/layout/Navbar'
import { UploadZone } from '@/components/dashboard/UploadZone'
import { Features } from '@/components/sections/Features'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { CtaSection } from '@/components/sections/CtaSection' // Added this

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
      
      {/* 1. Fixed Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <HeroBackground />
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950" />
      </div>

      {/* 2. Navigation */}
      <Navbar />

      {/* 3. Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-20 px-6">
        <div className="text-center space-y-6 max-w-4xl mx-auto mb-12">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-medium uppercase tracking-wide animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              100% Free & Open Source
           </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
            <span className="text-white drop-shadow-lg">Resume Analyzer</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">
              for Developers
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
            Built by students, for students. Optimize your CV for ATS using advanced NLP 
            without paying a premium subscription.
          </p>
        </div>

        {/* Upload Component */}
        <div className="w-full max-w-2xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-2 shadow-2xl animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-600">
           <UploadZone />
        </div>
      </section>

      {/* 4. Information Sections */}
      <Features />
      <HowItWorks />
      
      {/* 5. Final Call to Action (Instead of Pricing) */}
      <CtaSection />

      {/* 6. Footer */}
      <footer className="relative z-10 py-8 border-t border-white/10 text-center text-slate-500 text-sm">
        <p>
          © 2025 ResumeAI. Open sourced under MIT License. 
          <a href="#" className="text-blue-400 hover:underline ml-1">View on GitHub</a>
        </p>
      </footer>

    </main>
  )
}