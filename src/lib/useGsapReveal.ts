import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGsapReveal() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-reveal-hero]').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.06,
        })
      })

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        })
      })
    })

    return () => ctx.revert()
  }, [])
}
