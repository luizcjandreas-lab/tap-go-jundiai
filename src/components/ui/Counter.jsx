import { useEffect, useState } from 'react'
import { useInView } from '../../hooks/useInView'
import { usePrefersReducedMotion } from '../../hooks/usePageEffects'

/** Número que conta de 0 até "to" quando aparece na tela. */
export default function Counter({ to, duration = 1100 }) {
  const reduced = usePrefersReducedMotion()
  const [ref, inView] = useInView({ threshold: 0.5, rootMargin: '0px' })
  const [value, setValue] = useState(reduced ? to : 0)

  useEffect(() => {
    if (!inView) return undefined
    if (reduced) {
      setValue(to)
      return undefined
    }
    let frame
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * to))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, reduced, to, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {value}
    </span>
  )
}
