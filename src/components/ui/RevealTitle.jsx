import { useInView } from '../../hooks/useInView'

/**
 * Título revelado palavra por palavra.
 * "accent" é o trecho do texto que aparece em amarelo.
 */
export default function RevealTitle({ as: Tag = 'h2', text, accent = '', className = '', id }) {
  const [ref, inView] = useInView({ threshold: 0.2, rootMargin: '0px' })

  const start = accent ? text.indexOf(accent) : -1
  const parts =
    start >= 0
      ? [
          { text: text.slice(0, start), accent: false },
          { text: accent, accent: true },
          { text: text.slice(start + accent.length), accent: false },
        ]
      : [{ text, accent: false }]

  let index = 0
  const words = []
  parts.forEach((part, partIndex) => {
    part.text
      .split(/\s+/)
      .filter(Boolean)
      .forEach((word, wordIndex) => {
        const i = index++
        words.push(
          <span key={`${partIndex}-${wordIndex}`} className="rt-word">
            <span className={`rt-inner ${part.accent ? 'text-tap' : ''}`} style={{ '--i': i }}>
              {word}
            </span>
          </span>,
        )
        words.push(' ')
      })
  })

  return (
    <Tag ref={ref} id={id} className={`reveal-title ${inView ? 'is-visible' : ''} ${className}`}>
      {words}
    </Tag>
  )
}
