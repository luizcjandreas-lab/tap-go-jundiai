/* =========================================================================
   GALERIA "AQUI O ROLÊ ACONTECE"
   "layout" define o tamanho de cada foto na grade (classes do Tailwind).
   No celular a grade tem 2 colunas; a partir de 1024px, 12 colunas.
   ========================================================================= */

export const GALLERY = [
  {
    id: 'pista',
    image: 'galera-dj-pista',
    alt: 'Pista cheia durante um DJ set na área externa, com pessoas dançando e brindando',
    position: '50% 35%',
    layout: 'col-span-2 row-span-2 lg:col-span-5 lg:row-span-4',
  },
  {
    id: 'mesa',
    image: 'galera-mesa',
    alt: 'Amigos reunidos em uma mesa na área externa, ao lado de um muro de plantas',
    position: '50% 45%',
    layout: 'lg:col-span-4 lg:row-span-3',
  },
  {
    id: 'copos',
    image: 'copos-pilsen',
    alt: 'Dois copos de Pilsen com a marca Tap & Go sobre a mesa',
    position: '50% 55%',
    layout: 'lg:col-span-3 lg:row-span-3',
  },
  {
    id: 'dj',
    image: 'galera-dj-set',
    alt: 'DJ tocando discos de vinil durante um evento',
    position: '55% 50%',
    layout: 'lg:col-span-4 lg:row-span-3',
  },
  {
    id: 'amigos',
    image: 'galera-duo',
    alt: 'Dois amigos sorrindo para a foto, um deles com um copo de chopp',
    position: '50% 30%',
    layout: 'lg:col-span-3 lg:row-span-3',
  },
  {
    id: 'latas',
    image: 'drinks-gelo',
    alt: 'Latas de drinks no gelo, entre elas Tropical Gin e Mojito',
    position: '50% 50%',
    layout: 'col-span-2 lg:col-span-5 lg:row-span-2',
  },
]
