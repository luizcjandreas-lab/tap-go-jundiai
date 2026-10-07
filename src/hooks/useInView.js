import { useEffect, useRef, useState } from 'react'

/** Retorna [ref, inView]. Quando "once" é verdadeiro, para de observar após a primeira entrada. */
export function useInView({ threshold = 0.15, rootMargin = '0px 0px -8% 0px', once = true } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return undefined
    }
    // Conteúdo que já está na tela ao abrir a página aparece na hora,
    // sem depender do observador (alguns navegadores dentro de apps o atrasam).
    const rect = el.getBoundingClientRect()
    const viewport = window.innerHeight || document.documentElement.clientHeight
    if (once && rect.top < viewport && rect.bottom > 0) {
      setInView(true)
      return undefined
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return [ref, inView]
}
