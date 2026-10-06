import { ArrowUp, MapPin, MessageCircle } from 'lucide-react'
import { HOURS, LINKS, SITE, WHATSAPP_PENDING } from '../data/site'
import { asset } from '../lib/images'
import { InstagramIcon } from './ui/icons'

const linkClass =
  'inline-flex items-center gap-2.5 py-1 text-white/85 transition-colors hover:text-tap'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 bg-ink pb-28 pt-16 md:pb-10 md:pt-20">
      <div className="container-page grid gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <img src={asset('logo.png')} alt="Tap & Go" width="512" height="512" loading="lazy" className="size-20" />
          <p className="mt-5 font-display text-3xl uppercase leading-none text-white">{SITE.name}</p>
          <p className="mt-3 max-w-[34ch] text-white/70">
            Chopp artesanal, drinks, latas especiais e música dentro da Skate Lab.
          </p>
        </div>

        <div className="md:col-span-4">
          <h2 className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-mute">Endereço</h2>
          <address className="mt-3 not-italic leading-relaxed text-white/85">
            {SITE.street}
            <br />
            {SITE.city}
            <br />
            {SITE.insideOf}
          </address>
          <h2 className="mt-8 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-mute">Funcionamento</h2>
          <p className="mt-3 text-white/85">{SITE.openDays}</p>
          {HOURS.length ? (
            <ul className="mt-1 text-white/70">
              {HOURS.map((row) => (
                <li key={row.days}>
                  {row.days}: {row.time}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-1 text-sm text-white/60">{SITE.hoursNote}</p>
          )}
        </div>

        <div className="md:col-span-3">
          <h2 className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-mute">Contato</h2>
          <ul className="mt-3 flex flex-col gap-1.5">
            <li>
              <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <InstagramIcon aria-hidden="true" size={18} />
                Instagram<span className="sr-only"> (abre em nova guia)</span>
              </a>
            </li>
            <li>
              <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <MessageCircle aria-hidden="true" size={18} />
                WhatsApp<span className="sr-only"> (abre em nova guia)</span>
              </a>
              {WHATSAPP_PENDING ? <span className="block pl-7 text-xs text-white/50">Número em atualização</span> : null}
            </li>
            <li>
              <a href={LINKS.maps} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <MapPin aria-hidden="true" size={18} />
                Google Maps<span className="sr-only"> (abre em nova guia)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-page mt-14 flex flex-col-reverse gap-6 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-white/55">
          © {year} {SITE.name}. Todos os direitos reservados.
        </p>
        <a
          href="#inicio"
          className="inline-flex items-center gap-2 self-start font-mono text-[0.7rem] uppercase tracking-[0.16em] text-white/60 transition-colors hover:text-tap md:self-auto"
        >
          <ArrowUp aria-hidden="true" size={16} />
          Voltar ao topo
        </a>
      </div>
    </footer>
  )
}
