import { useState } from 'react'
import { Expand } from 'lucide-react'
import { GALLERY } from '../data/gallery'
import Lightbox from './Lightbox'
import Reveal from './ui/Reveal'
import RevealTitle from './ui/RevealTitle'
import SmartImage from './ui/SmartImage'

export default function ExperienceGallery() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="ambiente" aria-labelledby="ambiente-titulo" className="relative bg-ink pb-24 md:pb-32">
      <div className="container-page">
        <div className="grid gap-6 border-t border-white/12 pt-16 md:pt-24 lg:grid-cols-12 lg:items-end">
          <RevealTitle id="ambiente-titulo" text="AQUI O ROLÊ ACONTECE DE VERDADE." className="h-section lg:col-span-8" />
          <Reveal as="p" delay={120} className="max-w-[40ch] text-[1.06rem] leading-relaxed text-white/75 md:text-lg lg:col-span-4 lg:pb-2">
            Tem som, tem resenha, tem sabores novos e sempre tem um motivo para voltar.
          </Reveal>
        </div>

        <ul className="mt-12 grid auto-rows-[44vw] grid-cols-2 gap-3 sm:auto-rows-[32vw] md:mt-16 lg:auto-rows-[clamp(6.5rem,9.6vw,9.5rem)] lg:grid-cols-12 lg:gap-4">
          {GALLERY.map((item, index) => (
            <li key={item.id} className={item.layout}>
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                className="group gallery-tile relative block h-full w-full overflow-hidden bg-ink-3 text-left"
              >
                <SmartImage
                  name={item.image}
                  alt={item.alt}
                  position={item.position}
                  sizes="(min-width: 1024px) 42vw, 50vw"
                  className="zoom-img absolute inset-0 h-full w-full object-cover"
                />
                <span aria-hidden="true" className="gallery-tile-icon">
                  <Expand size={18} />
                </span>
                <span className="sr-only">Ampliar foto</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {openIndex !== null ? (
        <Lightbox items={GALLERY} index={openIndex} onClose={() => setOpenIndex(null)} onChange={setOpenIndex} />
      ) : null}
    </section>
  )
}
