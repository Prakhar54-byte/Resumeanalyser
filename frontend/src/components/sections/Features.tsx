'use client'
import { motion } from 'framer-motion'
import { CheckCircle2, Zap, BarChart3, Lock } from 'lucide-react'

const features = [
  {
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    title: "Instant Analysis",
    description: "Get a detailed score in under 5 seconds using our advanced Python backend."
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-blue-400" />,
    title: "ATS Scoring",
    description: "See exactly how Applicant Tracking Systems view your resume before recruiters do."
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-green-400" />,
    title: "Smart Suggestions",
    description: "AI-driven feedback on missing keywords, formatting errors, and impact verbs."
  },
  {
    icon: <Lock className="w-6 h-6 text-purple-400" />,
    title: "Privacy First",
    description: "Your data is processed securely and automatically deleted after analysis."
  }
]

export function Features() {
  return (
    <section id="features" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
          Why use ResumeAI?
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
          Stop guessing. Use data to build a resume that gets you hired.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-sm"
          >
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}