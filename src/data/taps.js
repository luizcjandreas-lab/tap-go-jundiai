/* =========================================================================
   TAPS DA CASA
   Para trocar um rótulo: edite o objeto correspondente.
   Para adicionar: copie um objeto, mude o "id" e coloque a foto em
   public/images (<nome>-720.webp e <nome>-1320.webp), informando o nome
   no campo "image" e as dimensões em src/data/images.js.
   Campos opcionais: hops (lúpulos), story (origem do nome), position
   (enquadramento da foto, no formato do CSS object-position).
   ========================================================================= */

export const TAPS = [
  {
    id: 'pilsen-marrocos-80',
    name: 'Pilsen Marrocos 80',
    style: 'Pilsen',
    description: 'Nosso carro-chefe. Leve, refrescante e maltada.',
    abv: '4,7',
    ibu: '9',
    story: 'Leva o nome do nosso antigo endereço.',
    image: 'tap-pilsen',
    position: '50% 60%',
    alt: 'Mão segurando um copo de Pilsen Marrocos 80 na área externa',
  },
  {
    id: 'ipa-xyryry-kuaray',
    name: 'IPA Xyryry Kuaray',
    style: 'American IPA',
    description: 'American IPA dourada, frutada e intensa.',
    abv: '6,5',
    ibu: '60',
    hops: ['Amarillo', 'Cascade', 'Mosaic', 'Citra'],
    story: 'O nome vem da festa rave Xyryry Kuaray de Jundiaí, clássica da cena eletrônica.',
    image: 'tap-ipa',
    position: '50% 70%',
    alt: 'Copo de IPA Xyryry Kuaray com luzes desfocadas ao fundo',
  },
  {
    id: 'session-ipa-tap-lovers',
    name: 'Session IPA Tap Lovers',
    style: 'Session IPA',
    description: 'Refrescante, cítrica e lupulada na medida.',
    abv: '4,5',
    ibu: '30',
    hops: ['Strata', 'Chinook', 'Simcoe'],
    story: 'Feita pra quem faz parte da história da Tap.',
    image: 'tap-session',
    position: '50% 70%',
    alt: 'Copo de Session IPA Tap Lovers sobre o balcão',
  },
  {
    id: 'weiss-ponte-torta',
    name: 'Weiss Ponte Torta',
    style: 'Weiss',
    description: 'Aromática, com notas de cravo e banana.',
    abv: '5,5',
    ibu: '12',
    story: 'O nome vem da Ponte Torta de Jundiaí.',
    image: 'tap-weiss',
    position: '38% 50%',
    alt: 'Arco de tijolos da Ponte Torta, em Jundiaí',
  },
  {
    id: 'torneiras-rotativas',
    name: 'Torneiras rotativas',
    style: '5 torneiras',
    description: 'Novos rótulos e estilos para sempre existir algo diferente para experimentar.',
    rotating: true,
    story: 'Sempre com rótulos das melhores cervejarias da região.',
    image: 'tap-rotativas',
    position: '50% 80%',
    alt: 'Torneiras do bar abaixo da lousa com os rótulos do dia',
  },
]
