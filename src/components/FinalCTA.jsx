import { Navigation } from 'lucide-react'
import { LINKS } from '../data/site'
import ButtonLink from './ui/ButtonLink'
import Reveal from './ui/Reveal'
import RevealTitle from './ui/RevealTitle'
import SmartImage from './ui/SmartImage'
import { InstagramIcon } from './ui/icons'

export default function FinalCTA() {
  return (
    <section aria-labelledby="cta-titulo" className="relative isolate overflow-hidden bg-ink">
      <SmartImage
        name="brinde-chopp"
        alt="Duas mãos brindando com copos de chopp da Tap & Go"
        sizes="100vw"
        position="58% 46%"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="cta-shade absolute inset-0 -z-10" />

      <div className="container-page flex min-h-[38rem] flex-col justify-end py-20 md:min-h-[44rem] md:justify-center md:py-28">
        <RevealTitle
          id="cta-titulo"
          text="CHAMA A GALERA E VEM PRA TAP."
          accent="VEM PRA TAP."
          className="max-w-[11ch] font-display text-[clamp(3.4rem,9vw,8.25rem)] uppercase leading-[0.86] text-white"
        />
        <Reveal as="p" delay={160} className="mt-6 max-w-[40ch] text-[1.06rem] leading-relaxed text-white/85 md:text-lg">
          Chopp artesanal, drinks especiais, música e boas histórias esperando por você em Jundiaí.
        </Reveal>
        <Reveal delay={240} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={LINKS.maps} external size="lg" icon={Navigation}>
            Como chegar
          </ButtonLink>
          <ButtonLink href={LINKS.instagram} external variant="ghost" size="lg" icon={InstagramIcon}>
            Seguir no Instagram
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  )
}
