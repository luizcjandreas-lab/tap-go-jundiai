import Reveal from './ui/Reveal'
import RevealTitle from './ui/RevealTitle'
import SectionLabel from './ui/SectionLabel'
import SmartImage from './ui/SmartImage'

export default function SmashLab() {
  return (
    <section id="smash-lab" aria-labelledby="smash-titulo" className="relative bg-ink py-24 md:py-32">
      <div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:order-2 lg:col-span-5 lg:pl-6">
          <Reveal>
            <SectionLabel>BATEU FOME?</SectionLabel>
          </Reveal>
          <RevealTitle id="smash-titulo" text="O SMASH LAB RESOLVE." className="h-section mt-5 max-w-[10ch]" />
          <Reveal as="p" delay={120} className="mt-7 max-w-[44ch] text-[1.06rem] leading-relaxed text-white/75 md:text-lg">
            Chopp gelado e smash burger formam uma combinação difícil de recusar. Aproveite a experiência completa dentro
            da Skate Lab.
          </Reveal>
        </div>

        <div className="grid grid-cols-12 gap-3 md:gap-4 lg:order-1 lg:col-span-7">
          <Reveal className="relative col-span-7 aspect-[4/5] overflow-hidden bg-ink-3">
            <SmartImage
              name="smash-burger-chopp"
              alt="Pessoa segurando um copo de chopp e um smash burger do Smash Lab"
              sizes="(min-width: 1024px) 32vw, 58vw"
              position="60% 55%"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </Reveal>
          <Reveal delay={140} className="relative col-span-5 mt-[38%] aspect-[4/5] overflow-hidden bg-ink-3">
            <SmartImage
              name="smash-burger"
              alt="Smash burger com queijo, bacon e alface em close"
              sizes="(min-width: 1024px) 23vw, 42vw"
              position="50% 62%"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
