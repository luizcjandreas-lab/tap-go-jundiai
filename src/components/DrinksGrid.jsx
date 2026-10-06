import { DRINKS } from '../data/drinks'
import Reveal from './ui/Reveal'
import RevealTitle from './ui/RevealTitle'
import SectionLabel from './ui/SectionLabel'
import SmartImage from './ui/SmartImage'

/* Destaques: duas fotos grandes lado a lado no desktop (7 + 5 colunas) */
const FEATURED_LAYOUT = [
  { item: 'lg:col-span-7', media: 'aspect-[4/3]', sizes: '(min-width: 1024px) 56vw, 100vw' },
  { item: 'lg:col-span-5', media: 'aspect-[4/3] lg:aspect-[20/21]', sizes: '(min-width: 1024px) 40vw, 100vw' },
]

function FeaturedDrink({ drink, layout }) {
  return (
    <article className="group">
      <div className={`relative overflow-hidden bg-ink-3 ${layout.media}`}>
        <SmartImage
          name={drink.image}
          alt={drink.alt}
          position={drink.position}
          sizes={layout.sizes}
          className="zoom-img absolute inset-0 h-full w-full object-cover"
        />
        {drink.format ? (
          <span className="absolute left-3 top-3 bg-ink/80 px-2.5 py-1 font-mono text-[0.68rem] font-medium uppercase tracking-[0.14em] text-white backdrop-blur-sm">
            {drink.format}
          </span>
        ) : null}
      </div>
      <h3 className="mt-5 font-display text-[2rem] uppercase leading-none text-white md:text-[2.4rem]">{drink.name}</h3>
      <span
        aria-hidden="true"
        className="mt-3 block h-[3px] w-10 bg-tap transition-[width] duration-500 ease-out group-hover:w-24 motion-reduce:transition-none"
      />
      <p className="mt-4 max-w-[46ch] leading-relaxed text-white/85">{drink.ingredients}</p>
      <p className="mt-1 max-w-[46ch] leading-relaxed text-mute">{drink.tagline}</p>
    </article>
  )
}

/* Latas: a arte inteira, sem cortes, na proporção original */
function CanDrink({ drink }) {
  return (
    <article className="group">
      <div className="relative aspect-[660/1093] overflow-hidden bg-ink-3">
        <SmartImage
          name={drink.image}
          alt={drink.alt}
          sizes="(min-width: 1024px) 19vw, (min-width: 640px) 34vw, 64vw"
          className="zoom-img absolute inset-0 h-full w-full object-contain"
        />
      </div>
      <h4 className="mt-4 font-display text-[1.55rem] uppercase leading-none text-white">{drink.name}</h4>
      <span
        aria-hidden="true"
        className="mt-2.5 block h-[3px] w-8 bg-tap transition-[width] duration-500 ease-out group-hover:w-16 motion-reduce:transition-none"
      />
      <p className="mt-3 text-[0.94rem] leading-relaxed text-white/80">{drink.ingredients}</p>
      <p className="mt-0.5 text-[0.94rem] leading-relaxed text-mute">{drink.tagline}</p>
    </article>
  )
}

export default function DrinksGrid() {
  const featured = DRINKS.filter((drink) => drink.featured)
  const cans = DRINKS.filter((drink) => !drink.featured)

  return (
    <section id="drinks" aria-labelledby="drinks-titulo" className="relative bg-ink pb-24 pt-20 md:pb-32 md:pt-28">
      <div className="container-page">
        <div className="max-w-3xl">
          <Reveal>
            <SectionLabel>ALÉM DO CHOPP</SectionLabel>
          </Reveal>
          <RevealTitle id="drinks-titulo" text="DRINKS PARA TODOS OS GOSTOS." className="h-section mt-5" />
        </div>

        {featured.length ? (
          <ul aria-label="Drinks em destaque" className="mt-12 grid gap-12 md:mt-16 lg:grid-cols-12 lg:gap-x-6">
            {featured.map((drink, index) => {
              const layout = FEATURED_LAYOUT[index % FEATURED_LAYOUT.length]
              return (
                <li key={drink.id} className={layout.item}>
                  <Reveal delay={index * 90}>
                    <FeaturedDrink drink={drink} layout={layout} />
                  </Reveal>
                </li>
              )
            })}
          </ul>
        ) : null}

        {cans.length ? (
          <div className="mt-16 md:mt-24">
            <div className="flex items-baseline justify-between gap-6 border-t border-white/12 pt-6">
              <h3 className="font-display text-[1.6rem] uppercase leading-none text-white md:text-[2rem]">Latas especiais</h3>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-mute">
                {cans.length} sabores
              </p>
            </div>
            <ul
              aria-label="Drinks em lata"
              tabIndex={0}
              className="drinks-track -mx-[var(--gutter)] mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[var(--gutter)] pb-2 lg:mx-0 lg:grid lg:snap-none lg:grid-cols-5 lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0"
            >
              {cans.map((drink, index) => (
                <li key={drink.id} className="w-[64vw] max-w-[17rem] shrink-0 snap-start sm:w-[34vw] lg:w-auto lg:max-w-none">
                  <Reveal delay={index * 80}>
                    <CanDrink drink={drink} />
                  </Reveal>
                </li>
              ))}
            </ul>
            <p aria-hidden="true" className="mt-5 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-mute lg:hidden">
              Deslize para ver todas
            </p>
          </div>
        ) : null}
      </div>
    </section>
  )
}
