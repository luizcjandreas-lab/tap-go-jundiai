const VARIANTS = {
  primary: 'bg-tap text-ink hover:bg-tap-2',
  ghost: 'border border-white/35 text-white hover:border-tap hover:text-tap',
  outline: 'border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-paper',
  dark: 'bg-ink text-white hover:bg-ink-3',
}

const SIZES = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-12 px-5 text-[0.95rem]',
  lg: 'h-14 px-6 text-base',
}

/** Botão em forma de link. Links externos abrem em nova guia com rel seguro. */
export default function ButtonLink({
  href,
  external = false,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  children,
  className = '',
  ...rest
}) {
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <a href={href} className={`btn ${VARIANTS[variant]} ${SIZES[size]} ${className}`} {...externalProps} {...rest}>
      <span>{children}</span>
      {Icon ? <Icon aria-hidden="true" size={18} strokeWidth={2} className="btn-icon" /> : null}
      {external ? <span className="sr-only"> (abre em nova guia)</span> : null}
    </a>
  )
}
