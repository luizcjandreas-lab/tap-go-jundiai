import { useEffect, useRef, useState } from 'react'
import { Menu, Navigation, X } from 'lucide-react'
import { LINKS, NAV, SITE } from '../data/site'
import { asset } from '../lib/images'
import { useActiveSection, useLockBodyScroll, useScrolled } from '../hooks/usePageEffects'
import ButtonLink from './ui/ButtonLink'
import { InstagramIcon } from './ui/icons'

export default function Header() {
  const scrolled = useScrolled(24)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(NAV.map((item) => item.id))
  const toggleRef = useRef(null)
  useLockBodyScroll(open)

  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    const mq = window.matchMedia?.('(min-width: 1024px)')
    if (!mq) return undefined
    const onChange = (event) => event.matches && setOpen(false)
    mq.addEventListener?.('change', onChange)
    return () => mq.removeEventListener?.('change', onChange)
  }, [])

  const solid = scrolled || open
  const close = () => setOpen(false)

  return (
    <>
      <header
        className={`site-header fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300 ${
          solid ? 'border-white/10 bg-ink/80 backdrop-blur-md' : 'border-transparent bg-transparent'
        }`}
      >
        <div className="container-page flex h-16 items-center justify-between gap-6 md:h-20">
          <a href="#inicio" onClick={close} className="shrink-0 rounded-full" aria-label="Tap & Go Jundiaí, ir para o início">
            <img src={asset('logo.png')} alt="" width="512" height="512" className="size-11 md:size-[52px]" />
          </a>

          <nav aria-label="Navegação principal" className="hidden lg:block">
            <ul className="flex items-center gap-6 xl:gap-8">
              {NAV.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={active === item.id ? 'true' : undefined}
                    className="nav-link text-[0.95rem] font-medium text-white/80 hover:text-white aria-[current=true]:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <ButtonLink href={LINKS.maps} external size="sm" icon={Navigation} className="hidden sm:inline-flex">
              Como chegar
            </ButtonLink>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              className="-mr-2 inline-flex size-12 items-center justify-center text-white lg:hidden"
            >
              {open ? <X aria-hidden="true" size={28} strokeWidth={1.75} /> : <Menu aria-hidden="true" size={28} strokeWidth={1.75} />}
            </button>
          </div>
        </div>
      </header>

      <div
        id="menu-mobile"
        aria-hidden={!open}
        className={`mobile-menu fixed inset-0 z-40 flex flex-col overflow-hidden bg-ink pt-24 transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? 'visible opacity-100' : 'pointer-events-none invisible opacity-0'
        }`}
      >
        <span aria-hidden="true" className="mobile-menu-diagonal" />
        <nav aria-label="Navegação do celular" className="container-page relative flex-1 overflow-y-auto">
          <ul className="flex flex-col">
            {NAV.map((item, index) => (
              <li key={item.id} className="border-b border-white/10" style={{ '--i': index }}>
                <a
                  href={`#${item.id}`}
                  onClick={close}
                  tabIndex={open ? 0 : -1}
                  aria-current={active === item.id ? 'true' : undefined}
                  className="mobile-link flex items-center justify-between py-3.5 font-display text-[2.6rem] uppercase leading-none text-white aria-[current=true]:text-tap"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="container-page relative flex flex-col gap-4 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] pt-6">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-mute">
            {SITE.street} · {SITE.insideOf}
          </p>
          <div className="grid grid-cols-[1fr_auto] gap-3">
            <ButtonLink href={LINKS.maps} external size="lg" icon={Navigation} tabIndex={open ? 0 : -1}>
              Como chegar
            </ButtonLink>
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={open ? 0 : -1}
              className="inline-flex size-14 items-center justify-center rounded-[3px] border border-white/30 text-white transition-colors hover:border-tap hover:text-tap"
            >
              <InstagramIcon aria-hidden="true" size={22} />
              <span className="sr-only">Instagram da Tap & Go (abre em nova guia)</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
