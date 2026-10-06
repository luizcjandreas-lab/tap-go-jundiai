import Counter from './ui/Counter'
import Reveal from './ui/Reveal'
import RevealTitle from './ui/RevealTitle'
import SectionLabel from './ui/SectionLabel'
import SmartImage from './ui/SmartImage'

const STATS = [
  { count: 10, label: 'taps', accent: true },
  { value: '5+5', label: 'fixos + rotativos' },
  { value: 'TER–DOM', label: 'terça a domingo' },
]

export default function About() {
  return (
    <section id="a-tap" aria-labelledby="sobre-titulo" className="relative bg-ink pb-24 pt-16 md:pb-32 md:pt-24">
      <div className="container-page grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6 lg:pt-8">
          <Reveal>
            <SectionLabel>A EXPERIÊNCIA TAP</SectionLabel>
          </Reveal>
          <RevealTitle
            id="sobre-titulo"
            text="UM PONTO DE ENCONTRO PARA QUEM GOSTA DE BEBIDA BOA, MÚSICA E GENTE."
            className="h-section mt-5 max-w-[14ch]"
          />
          <Reveal as="p" delay={120} className="mt-8 max-w-[52ch] text-[1.06rem] leading-relaxed text-white/75 md:text-lg">
            A Tap & Go nasceu para reunir sabores, música e boas histórias em um só lugar. Dentro da Skate Lab, em
            Jundiaí, você encontra chopes artesanais, drinks marcantes, eventos e um ambiente feito para aproveitar sem
            pressa.
          </Reveal>

          <Reveal delay={200}>
            <dl className="mt-12 grid border-t border-white/15 sm:grid-cols-3">
              {STATS.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`flex flex-row-reverse items-baseline justify-between gap-4 border-b border-white/15 py-4 sm:flex-col-reverse sm:items-start sm:justify-end sm:gap-2 sm:border-b-0 sm:py-0 sm:pt-6 ${
                    index < STATS.length - 1 ? 'sm:border-r sm:pr-4' : ''
                  } ${index > 0 ? 'sm:pl-5' : ''}`}
                >
                  <dt className="text-right font-mono text-[0.7rem] uppercase tracking-[0.14em] text-mute sm:text-left">{stat.label}</dt>
                  <dd className={`whitespace-nowrap font-display text-[2.6rem] leading-none sm:text-[clamp(2.4rem,3.6vw,4.25rem)] ${stat.accent ? 'text-tap' : 'text-white'}`}>
                    {stat.count ? <Counter to={stat.count} /> : stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <div className="relative mx-auto max-w-[34rem] pb-20 lg:ml-auto lg:mr-0 lg:pb-28">
            <Reveal className="relative ml-auto aspect-[4/5] w-[84%] overflow-hidden bg-ink-3">
              <SmartImage
                name="placa-tap"
                alt="Placa circular da Tap & Go na fachada preta do bar"
                sizes="(min-width: 1024px) 28rem, 84vw"
                position="42% 50%"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </Reveal>
            <Reveal
              delay={160}
              className="absolute bottom-0 left-0 aspect-square w-[56%] overflow-hidden border-[6px] border-ink bg-ink-3"
            >
              <SmartImage
                name="brinde-drinks"
                alt="Duas pessoas brindando com drinks nos copos da Tap & Go, com luzes acesas ao fundo"
                sizes="(min-width: 1024px) 19rem, 56vw"
                position="45% 55%"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </Reveal>
            <p className="absolute bottom-2 right-0 max-w-[40%] text-right font-mono text-[0.68rem] uppercase leading-snug tracking-[0.14em] text-mute">
              Dentro da Skate Lab, Jundiaí
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
