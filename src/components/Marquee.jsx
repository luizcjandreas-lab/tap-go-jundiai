const ITEMS = ['10 TAPS', 'DRINKS', 'DJ SETS', 'SMASH LAB', 'JUNDIAÍ', 'TERÇA A DOMINGO']

function Row({ hidden = false }) {
  // Cada metade repete a lista duas vezes para cobrir telas largas sem emendas.
  const items = [...ITEMS, ...ITEMS]
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {items.map((item, index) => (
        <li key={`${item}-${index}`} className="flex items-center">
          <span className="px-5 md:px-7">{item}</span>
          <span aria-hidden="true">•</span>
        </li>
      ))}
    </ul>
  )
}

export default function Marquee() {
  return (
    <div className="relative z-20 -mt-5 overflow-hidden py-5 md:-mt-7">
      <div className="marquee-band -ml-[5%] w-[110%] -rotate-[1.5deg] bg-tap py-3 text-ink md:py-4">
        <p className="sr-only">10 taps, drinks, DJ sets, Smash Lab, Jundiaí, terça a domingo.</p>
        <div
          aria-hidden="true"
          className="flex w-max animate-marquee font-display text-[1.6rem] uppercase leading-none tracking-[0.02em] motion-reduce:animate-none md:text-[2.1rem]"
        >
          <Row />
          <Row hidden />
        </div>
      </div>
    </div>
  )
}
