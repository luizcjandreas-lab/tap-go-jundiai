import { IMAGES } from '../data/images'

const BASE = import.meta.env.BASE_URL || '/'

/** Caminho de um arquivo da pasta public, respeitando a base do Vite. */
export const asset = (path) => `${BASE}${path}`

/** src, srcSet e dimensões de uma foto de public/images. */
export function imageSources(name) {
  const meta = IMAGES[name] || { w: 1320, h: 1320 }
  const small = asset(`images/${name}-720.webp`)
  const large = asset(`images/${name}-1320.webp`)
  return {
    src: large,
    srcSet: `${small} 720w, ${large} 1320w`,
    width: meta.w,
    height: meta.h,
  }
}
