/** Etiqueta das seções. O marcador reproduz a divisão diagonal do logo. */
export default function SectionLabel({ children, tone = 'light', className = '', ...rest }) {
  const color = tone === 'dark' ? 'text-ink' : 'text-tap'
  return (
    <p
      className={`flex items-center gap-2.5 font-mono text-[0.72rem] font-medium uppercase tracking-[0.18em] ${color} ${className}`}
      {...rest}
    >
      <span aria-hidden="true" className="label-dot" />
      {children}
    </p>
  )
}
