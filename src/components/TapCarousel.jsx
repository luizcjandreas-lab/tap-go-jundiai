import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TAPS } from '../data/taps'
import { usePrefersReducedMotion } from '../hooks/usePageEffects'
import Reveal from './ui/Reveal'
import RevealTitle from './ui/RevealTitle'
import SectionLabel from './ui/SectionLabel'
import SmartImage from './ui/SmartImage'
import { BrushLine } from './ui/icons'

function Spec({ label, value, className = '' }) {
  return (
    <div className={`py-3 ${className}`}>
      <dt className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-ink/65">{label}</dt>
      <dd className="mt-0.5 font-mono text-lg font-medium tabular-nums text-ink">{value}</dd>
    </div>
  )
}

function TapCard({ tap }) {
  return (
    <article className="group flex h-full flex-col">
      <div className="relative aspect-[4/5] overflow-hidden bg-ink">
        <SmartImage
          name={tap.image}
          alt={tap.alt}
          position={tap.position}
          sizes="(min-width: 768px) 23rem, 80vw"
          className="zoom-img absolute inset-0 h-full w-full object-cover"
        />
        <span className="absolute left-3 top-3 bg-tap px-2.5 py-1 font-mono text-[0.68rem] font-medium uppercase tracking-[0.14em] text-ink">
          {tap.style}
        </span>
      </div>

      <div className="flex flex-1 flex-col pt-5">
        <h3 className="font-display text-[2rem] uppercase leading-[0.95] text-ink">{tap.name}</h3>
        <p className="mt-3 text-[0.98rem] leading-relaxed text-ink/75">{tap.description}</p>

        <dl className="mt-5 grid grid-cols-2 border-y border-ink/15">
          {tap.rotating ? (
            <>
              <Spec label="Torneiras" value="5" className="border-r border-ink/15 pr-3" />
              <Spec label="Rótulos" value="Sempre novos" className="pl-4" />
            </>
          ) : (
            <>
              <Spec label="ABV" value={`${tap.abv}%`} className="border-r border-ink/15 pr-3" />
              <Spec label="IBU" value={tap.ibu} className="pl-4" />
            </>
          )}
        </dl>

        {tap.hops ? (
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            <span className="block font-mono text-[0.68rem] uppercase tracking-[0.14em] text-ink/65">Lúpulos</span>
            {tap.hops.join(', ')}
          </p>
        ) : null}

        {tap.story ? (
          <p className="mt-auto flex gap-2.5 pt-5 text-sm leading-snug text-ink/70">
            <span aria-hidden="true" className="mt-1.5 h-[2px] w-4 shrink-0 bg-tap" />
            {tap.story}
          </p>
        ) : null}
      </div>
    </article>
  )
}

export default function TapCarousel() {
  const trackRef = useRef(null)
  const reduced = usePrefersReducedMotion()
  const [edges, setEdges] = useState({ start: true, end: false })

  const update = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setEdges({
      start: el.scrollLeft < 8,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 8,
    })
  }, [])

  useEffect(() => {
    const el = trackRef.current
    update()
    el?.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      el?.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [update])

  const scrollByCard = (direction) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('li')
    const step = card ? card.getBoundingClientRect().width + 20 : el.clientWidth * 0.8
    el.scrollBy({ left: direction * step, behavior: reduced ? 'auto' : 'smooth' })
  }

  const arrowClass =
    'inline-flex size-12 items-center justify-center rounded-[3px] border border-ink/25 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-ink/25 disabled:hover:bg-transparent disabled:hover:text-ink'

  return (
    <section id="taps" aria-labelledby="taps-titulo" className="edge-diagonal relative bg-paper py-28 text-ink md:py-36">
      <div className="container-page flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <Reveal>
            <SectionLabel tone="dark">DIRETO DA TORNEIRA</SectionLabel>
          </Reveal>
          <RevealTitle id="taps-titulo" text="DESCUBRA OS TAPS DA CASA." className="h-section mt-5" />
          <Reveal as="p" delay={100} className="mt-6 max-w-[48ch] text-[1.06rem] leading-relaxed text-ink/75 md:text-lg">
            Rótulos fixos, novidades rotativas e cervejas selecionadas das melhores cervejarias da região.
          </Reveal>
        </div>
        <div className="hidden gap-2 md:flex">
          <button type="button" className={arrowClass} onClick={() => scrollByCard(-1)} disabled={edges.start}>
            <ChevronLeft aria-hidden="true" size={22} />
            <span className="sr-only">Ver taps anteriores</span>
          </button>
          <button type="button" className={arrowClass} onClick={() => scrollByCard(1)} disabled={edges.end}>
            <ChevronRight aria-hidden="true" size={22} />
            <span className="sr-only">Ver próximos taps</span>
          </button>
        </div>
      </div>

      <ul
        ref={trackRef}
        tabIndex={0}
        aria-label="Taps da casa. Use as setas do teclado ou deslize para ver todos."
        className="carousel-track mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 md:mt-14"
      >
        {TAPS.map((tap) => (
          <li key={tap.id} className="w-[min(80vw,22rem)] shrink-0 snap-start md:w-[23rem]">
            <TapCard tap={tap} />
          </li>
        ))}
      </ul>
      <p aria-hidden="true" className="container-page mt-5 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink/60 md:hidden">
        Deslize para ver todos
      </p>

      <div className="container-page mt-16 md:mt-24">
        <Reveal className="border-t border-ink/15 pt-10">
          <p className="font-display text-[clamp(2.7rem,8.4vw,7.75rem)] uppercase leading-[0.9] text-ink">
            5 torneiras fixas{' '}
            <span className="relative isolate inline-block whitespace-nowrap">
              + 5 rotativas.
              <BrushLine className="absolute -left-[3%] bottom-[0.06em] -z-10 h-[0.36em] w-[106%] text-tap" />
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
