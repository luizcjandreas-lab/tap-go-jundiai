import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { imageSources } from '../lib/images'
import { useLockBodyScroll } from '../hooks/usePageEffects'

/** Visualizador de fotos em tela cheia. Fecha com Esc, navega com as setas e com gesto de deslizar. */
export default function Lightbox({ items, index, onClose, onChange }) {
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  const touchStart = useRef(null)
  const handlers = useRef({ onClose, onChange, index, total: items.length })
  handlers.current = { onClose, onChange, index, total: items.length }
  useLockBodyScroll(true)

  useEffect(() => {
    const previousFocus = document.activeElement
    closeRef.current?.focus()

    const onKey = (event) => {
      const { onClose: close, onChange: change, index: current, total } = handlers.current
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowRight') change((current + 1) % total)
      if (event.key === 'ArrowLeft') change((current - 1 + total) % total)
      if (event.key === 'Tab') {
        const focusables = dialogRef.current?.querySelectorAll('button')
        if (!focusables?.length) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      previousFocus?.focus?.()
    }
  }, [])

  const item = items[index]
  const { src, srcSet, width, height } = imageSources(item.image)
  const prev = () => onChange((index - 1 + items.length) % items.length)
  const next = () => onChange((index + 1) % items.length)

  const onTouchStart = (event) => {
    touchStart.current = event.touches[0].clientX
  }
  const onTouchEnd = (event) => {
    if (touchStart.current === null) return
    const delta = event.changedTouches[0].clientX - touchStart.current
    if (Math.abs(delta) > 50) (delta < 0 ? next : prev)()
    touchStart.current = null
  }

  const control =
    'size-12 items-center justify-center rounded-[3px] border border-white/25 bg-ink/60 text-white transition-colors hover:border-tap hover:text-tap'

  return createPortal(
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Foto ampliada"
      className="lightbox fixed inset-0 z-[70] flex flex-col bg-ink/95 backdrop-blur-sm"
      onClick={(event) => event.target === event.currentTarget && onClose()}
    >
      <div className="container-page flex h-16 shrink-0 items-center justify-between pt-[env(safe-area-inset-top,0px)] md:h-20">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-mute" aria-live="polite">
          {index + 1} / {items.length}
        </p>
        <button ref={closeRef} type="button" onClick={onClose} className={`${control} inline-flex`}>
          <X aria-hidden="true" size={22} />
          <span className="sr-only">Fechar foto</span>
        </button>
      </div>

      <div
        className="relative flex min-h-0 flex-1 items-center justify-center px-4 md:px-24"
        onClick={(event) => event.target === event.currentTarget && onClose()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <img
          key={item.id}
          src={src}
          srcSet={srcSet}
          sizes="(min-width: 768px) 80vw, 100vw"
          width={width}
          height={height}
          alt={item.alt}
          className="lightbox-img max-h-full w-auto max-w-full object-contain"
        />
        <button type="button" onClick={prev} className={`${control} absolute left-6 top-1/2 hidden -translate-y-1/2 md:inline-flex`}>
          <ChevronLeft aria-hidden="true" size={24} />
          <span className="sr-only">Foto anterior</span>
        </button>
        <button type="button" onClick={next} className={`${control} absolute right-6 top-1/2 hidden -translate-y-1/2 md:inline-flex`}>
          <ChevronRight aria-hidden="true" size={24} />
          <span className="sr-only">Próxima foto</span>
        </button>
      </div>

      <div className="container-page flex shrink-0 items-center justify-between gap-4 py-4 pb-[calc(1rem+env(safe-area-inset-bottom,0px))]">
        <p className="max-w-[60ch] text-sm leading-snug text-white/75">{item.alt}</p>
        <div className="flex gap-2 md:hidden">
          <button type="button" onClick={prev} className={`${control} inline-flex`}>
            <ChevronLeft aria-hidden="true" size={22} />
            <span className="sr-only">Foto anterior</span>
          </button>
          <button type="button" onClick={next} className={`${control} inline-flex`}>
            <ChevronRight aria-hidden="true" size={22} />
            <span className="sr-only">Próxima foto</span>
          </button>
        </div>
      </div>
    </div>,
    document.body,
  )
}
