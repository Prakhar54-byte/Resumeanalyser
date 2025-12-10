'use client'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto p-1 rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="bg-slate-950 rounded-[22px] py-16 px-8 text-center overflow-hidden relative">
          
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500/20 blur-[100px]" />

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="relative z-10 space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Ready to crack that interview?
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg">
              Join thousands of developers optimizing their resumes for free. 
              No credit card required. No sign-up limits.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-12 text-lg">
                <Sparkles className="w-5 h-5 mr-2" />
                Analyze My Resume
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}