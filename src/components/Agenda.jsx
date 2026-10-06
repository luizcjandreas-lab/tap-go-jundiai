import { AGENDA, AGENDA_NOTE } from '../data/agenda'
import { LINKS } from '../data/site'
import ButtonLink from './ui/ButtonLink'
import Reveal from './ui/Reveal'
import RevealTitle from './ui/RevealTitle'
import SectionLabel from './ui/SectionLabel'
import { InstagramIcon } from './ui/icons'

export default function Agenda() {
  return (
    <section id="agenda" aria-labelledby="agenda-titulo" className="grain relative isolate overflow-hidden bg-ink-2 py-24 md:py-32">
      <div className="container-page">
        <div className="max-w-3xl">
          <Reveal>
            <SectionLabel>PROGRAMAÇÃO</SectionLabel>
          </Reveal>
          <RevealTitle id="agenda-titulo" text="SEMPRE TEM ALGO ACONTECENDO." className="h-section mt-5" />
        </div>

        <ul className="mt-12 grid gap-4 md:mt-16 lg:grid-cols-3 lg:gap-5">
          {AGENDA.map((item, index) => (
            <li key={item.day} className="min-w-0">
              <Reveal delay={index * 110} className="h-full">
                <article className="poster group relative flex h-full min-h-[19rem] flex-col overflow-hidden border border-white/12 bg-ink p-6 transition-colors duration-300 hover:border-tap/60 md:p-8 lg:min-h-[27rem]">
                  <span aria-hidden="true" className="poster-corner" />
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-mute">
                    {item.date ? item.date : 'Tap & Go apresenta'}
                  </p>
                  <h3 className="poster-day mt-6 font-display uppercase leading-[0.84] text-tap">
                    {item.day}
                  </h3>
                  <p className="mt-6 max-w-[16ch] text-[1.5rem] font-medium leading-[1.15] text-white md:text-[1.7rem]">
                    {item.title}
                  </p>
                  {item.lineup ? <p className="mt-3 text-white/80">{item.lineup}</p> : null}
                  <p className="mt-auto border-t border-white/12 pt-4 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-mute">
                    {item.lineup ? 'Confirmado' : 'Atrações no Instagram'}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-10 flex flex-col gap-6 border-t border-white/12 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-[46ch] text-[1.06rem] leading-relaxed text-white/80">{AGENDA_NOTE}</p>
          <ButtonLink href={LINKS.instagram} external icon={InstagramIcon} size="lg" className="self-start md:self-auto">
            Ver agenda no Instagram
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  )
}
