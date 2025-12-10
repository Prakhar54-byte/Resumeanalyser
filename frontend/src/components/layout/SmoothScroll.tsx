'use client'
import { ReactNode, useEffect } from 'react'
import Lenis from 'lenis'

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Ease-out exponential
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    })

    // Sync Lenis scroll with browser's requestAnimationFrame
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Handle Anchor Links (The "Click to Scroll" part)
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click',  (e) => {
        e.preventDefault()
        const targetId = (e.target as HTMLAnchorElement).getAttribute('href')
        if (targetId) {
            const targetElement = document.querySelector(targetId) as HTMLElement
            if (targetElement) {
                lenis.scrollTo(targetElement, { offset: -100 }) // offset for Navbar
            }
        }
      })
    })

    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}