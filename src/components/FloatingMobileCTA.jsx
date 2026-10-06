import { useEffect, useState } from 'react'
import { Navigation } from 'lucide-react'
import { LINKS } from '../data/site'
import ButtonLink from './ui/ButtonLink'

/** Botão fixo "Como chegar" no celular. Aparece depois da primeira tela e some perto do rodapé. */
export default function FloatingMobileCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const viewport = window.innerHeight
      const nearEnd = y + viewport >= document.documentElement.scrollHeight - 160
      setVisible(y > viewport * 0.8 && !nearEnd)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div
      aria-hidden={!visible}
      className={`floating-cta fixed inset-x-0 bottom-0 z-30 px-4 pt-6 transition-[opacity,transform] duration-300 md:hidden ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-full opacity-0'
      }`}
    >
      <ButtonLink href={LINKS.maps} external size="lg" icon={Navigation} tabIndex={visible ? 0 : -1} className="w-full shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
        Como chegar
      </ButtonLink>
    </div>
  )
}
