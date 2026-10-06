/* Ícones de marca desenhados no mesmo traço dos ícones Lucide. */

export function InstagramIcon({ size = 20, strokeWidth = 2, className = '', ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.25" />
      <path d="M17.6 6.4h.01" />
    </svg>
  )
}

/** Traço amarelo "pintado à mão", usado como grifo e divisor. */
export function BrushLine({ className = '' }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 40"
      preserveAspectRatio="none"
      className={className}
      fill="currentColor"
    >
      <path d="M3 22c18-6 46-11 88-12 52-2 96 3 146 2 54-1 103-7 158-5 3 0 5 3 2 5-6 4-23 6-44 8-49 4-98 3-150 5-58 2-105 6-150 7-22 1-38-1-48-4-5-2-6-4-2-6z" />
      <path d="M40 31c40-3 92-5 140-5 46 0 96-2 140-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity=".55" />
    </svg>
  )
}
