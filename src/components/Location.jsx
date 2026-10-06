import { Clock, MapPin, MessageCircle, Navigation } from 'lucide-react'
import { HOURS, LINKS, MAP_EMBED_DISABLED, SITE, WHATSAPP_PENDING } from '../data/site'
import ButtonLink from './ui/ButtonLink'
import Reveal from './ui/Reveal'
import RevealTitle from './ui/RevealTitle'
import { InstagramIcon } from './ui/icons'

function MapEmbed() {
  if (MAP_EMBED_DISABLED) {
    return (
      <div className="map-fallback relative flex h-full min-h-[22rem] flex-col justify-end overflow-hidden bg-ink p-6 text-white md:p-8">
        <span aria-hidden="true" className="map-fallback-pin">
          <MapPin size={26} strokeWidth={2} />
        </span>
        <p className="relative font-display text-3xl uppercase leading-none md:text-4xl">{SITE.street}</p>
        <p className="relative mt-2 text-white/75">
          {SITE.city} · {SITE.insideOf}
        </p>
        <ButtonLink href={LINKS.maps} external icon={Navigation} className="relative mt-6 self-start">
          Abrir no Google Maps
        </ButtonLink>
      </div>
    )
  }

  return (
    <div className="relative h-full min-h-[22rem] overflow-hidden bg-ink-3">
      <iframe
        title="Mapa com a localização da Tap & Go Jundiaí"
        src={LINKS.mapsEmbed}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="map-frame absolute inset-0 h-full w-full border-0"
      />
    </div>
  )
}

export default function Location() {
  return (
    <section
      id="localizacao"
      aria-labelledby="local-titulo"
      className="edge-diagonal-top relative bg-paper pb-24 pt-28 text-ink md:pb-32 md:pt-40"
    >
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <RevealTitle id="local-titulo" text="SEU PRÓXIMO ROLÊ COMEÇA AQUI." className="h-section max-w-[12ch]" />

          <Reveal delay={100}>
            <dl className="mt-10 border-y border-ink/15">
              <div className="flex gap-4 border-b border-ink/15 py-5">
                <MapPin aria-hidden="true" size={22} className="mt-0.5 shrink-0 text-ink" />
                <div>
                  <dt className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-ink/65">Endereço</dt>
                  <dd className="mt-1 text-lg font-medium leading-snug">{SITE.address}</dd>
                  <dd className="text-ink/75">{SITE.insideOf}</dd>
                </div>
              </div>
              <div className="flex gap-4 py-5">
                <Clock aria-hidden="true" size={22} className="mt-0.5 shrink-0 text-ink" />
                <div>
                  <dt className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-ink/65">Funcionamento</dt>
                  <dd className="mt-1 text-lg font-medium leading-snug">Funcionamento de {SITE.openDays.toLowerCase()}</dd>
                  {HOURS.length ? (
                    HOURS.map((row) => (
                      <dd key={row.days} className="flex justify-between gap-6 text-ink/75">
                        <span>{row.days}</span>
                        <span className="tabular-nums">{row.time}</span>
                      </dd>
                    ))
                  ) : (
                    <dd className="text-ink/75">{SITE.hoursNote}</dd>
                  )}
                </div>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={180} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={LINKS.maps} external size="lg" icon={Navigation}>
              Abrir rota
            </ButtonLink>
            <ButtonLink href={LINKS.whatsapp} external variant="outline" size="lg" icon={MessageCircle}>
              Falar com a Tap
            </ButtonLink>
          </Reveal>
          {WHATSAPP_PENDING ? (
            <p className="mt-3 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-ink/60">
              Número do WhatsApp em atualização
            </p>
          ) : null}

          <a
            href={LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2.5 font-medium text-ink underline decoration-ink/25 decoration-2 underline-offset-[6px] transition-colors hover:decoration-tap"
          >
            <InstagramIcon aria-hidden="true" size={20} />
            {LINKS.instagramHandle} no Instagram
            <span className="sr-only"> (abre em nova guia)</span>
          </a>
        </div>

        <Reveal delay={120} className="map-frame-wrap relative min-h-[22rem] lg:col-span-7">
          <MapEmbed />
        </Reveal>
      </div>
    </section>
  )
}
