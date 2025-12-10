'use client'

import dynamic from 'next/dynamic'

const HeroBackground = dynamic(() => import('./HeroBackground'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-slate-950" />
})

export default HeroBackground
