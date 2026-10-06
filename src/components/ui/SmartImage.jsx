import { useState } from 'react'
import { imageSources } from '../../lib/images'

/**
 * Foto otimizada: srcset em duas larguras, dimensões definidas, lazy loading
 * fora da primeira dobra e um bloco neutro caso o arquivo não carregue.
 */
export default function SmartImage({
  name,
  alt,
  sizes = '100vw',
  priority = false,
  position = '50% 50%',
  className = '',
}) {
  const [failed, setFailed] = useState(false)
  const { src, srcSet, width, height } = imageSources(name)

  if (failed) {
    return (
      <div role="img" aria-label={alt} className={`img-fallback ${className}`}>
        <span>Imagem indisponível no momento</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      width={width}
      height={height}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchpriority={priority ? 'high' : undefined}
      onError={() => setFailed(true)}
      className={className}
      style={{ objectPosition: position }}
    />
  )
}
