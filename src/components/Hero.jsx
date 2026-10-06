import { ArrowDown, Navigation } from 'lucide-react'
import { LINKS } from '../data/site'
import ButtonLink from './ui/ButtonLink'
import RevealTitle from './ui/RevealTitle'
import SectionLabel from './ui/SectionLabel'
import SmartImage from './ui/SmartImage'

export default function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-titulo" className="relative isolate overflow-hidden bg-ink">
      {/* Foto: ocupa o topo no celular e o lado direito, com corte diagonal, no desktop */}
      <div className="hero-media absolute inset-x-0 top-[-21svh] -z-10 h-[71svh] lg:inset-y-0 lg:left-[34%] lg:top-0 lg:h-auto">
        <SmartImage
          name="hero-copos-skate"
          alt="Três copos da Tap & Go, com chopp e drink, na borda da pista de skate, com um skatista passando ao fundo"
          priority
          sizes="(min-width: 1024px) 66vw, 100vw"
          position="50% 74%"
          className="hero-img absolute inset-0 h-full w-full object-cover"
        />
        <div aria-hidden="true" className="hero-shade absolute inset-0" />
      </div>
      <svg
        aria-hidden="true"
        className="hero-cut pointer-events-none absolute inset-y-0 left-[34%] right-0 -z-10 hidden h-full w-[66%] lg:block"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="hero-cut-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FFC900" stopOpacity="0" />
            <stop offset="0.12" stopColor="#FFC900" stopOpacity="0" />
            <stop offset="0.24" stopColor="#FFC900" stopOpacity="1" />
          </linearGradient>
        </defs>
        <line x1="22" y1="0" x2="0" y2="100" stroke="url(#hero-cut-fade)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
      </svg>

      <div className="container-page flex min-h-[100svh] flex-col justify-end pb-10 pt-28 md:pb-14 lg:justify-center lg:pb-16 lg:pt-32">
        <div className="max-w-[58rem]">
          <SectionLabel className="hero-in" style={{ '--d': '60ms' }}>
            TAP & GO • JUNDIAÍ
          </SectionLabel>
          <RevealTitle
            as="h1"
            id="hero-titulo"
            text="CHOPP, MÚSICA E BOAS HISTÓRIAS."
            accent="BOAS HISTÓRIAS."
            className="mt-5 max-w-[12ch] font-display text-[clamp(3.6rem,9.4vw,8.75rem)] uppercase leading-[0.86] text-white"
          />
          <p
            className="hero-in mt-6 max-w-[38ch] text-[1.06rem] leading-relaxed text-white/80 sm:text-lg"
            style={{ '--d': '650ms' }}
          >
            10 taps, drinks especiais, música e aquela resenha que transforma qualquer dia em uma boa história.
          </p>
          <div className="hero-in mt-8 grid grid-cols-2 gap-3 sm:flex" style={{ '--d': '780ms' }}>
            <ButtonLink href="#a-tap" size="lg" className="px-3 sm:px-6">
              Conhecer a Tap
            </ButtonLink>
            <ButtonLink href={LINKS.maps} external variant="ghost" size="lg" icon={Navigation} className="px-3 sm:px-6">
              Como chegar
            </ButtonLink>
          </div>
        </div>

        <a
          href="#a-tap"
          className="hero-in scroll-cue mt-8 inline-flex items-center gap-3 self-start font-mono text-[0.7rem] uppercase tracking-[0.18em] text-white/60 transition-colors hover:text-tap lg:mt-14"
          style={{ '--d': '1000ms' }}
        >
          <span aria-hidden="true" className="scroll-cue-line" />
          Role para descobrir
          <ArrowDown aria-hidden="true" size={14} />
        </a>
      </div>
    </section>
  )
}
