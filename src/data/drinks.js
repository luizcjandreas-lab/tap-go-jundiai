/* =========================================================================
   DRINKS
   featured: true  → aparece em destaque, com foto grande (no topo da seção).
   Os demais aparecem na fileira de latas, com a arte inteira da lata.
   "format" aparece como etiqueta sobre a foto (ex.: Lata, Na torneira).
   A ordem da lista define a ordem na tela.
   ========================================================================= */

export const DRINKS = [
  {
    id: 'madame-collins',
    name: 'Madame Collins',
    ingredients: 'Vodka, limão, maracujá, steinhaeger e terpenos.',
    tagline: 'Refrescante e cheia de personalidade.',
    format: 'Lata',
    featured: true,
    image: 'drink-madame-collins',
    position: '50% 45%',
    alt: 'Pessoa segurando uma lata de Madame Collins e um copo do drink servido com gelo',
  },
  {
    id: 'xeque-mate',
    name: 'Xeque Mate',
    ingredients: 'Mate, rum, guaraná e limão.',
    tagline: 'Um clássico marcante que já virou tradição na Tap.',
    format: 'Na torneira',
    featured: true,
    image: 'drink-xeque-mate',
    position: '50% 55%',
    alt: 'Lata de Xeque Mate ao lado de um copo da Tap & Go com o drink e gelo',
  },
  {
    id: 'mascate-maracuja',
    name: 'Mascate Maracujá',
    ingredients: 'Maracujá, caju, água de coco e rum.',
    tagline: 'Tropical e diferente na medida.',
    image: 'lata-mascate-maracuja',
    alt: 'Arte com a lata inteira do Mascate Maracujá e os ingredientes do drink',
  },
  {
    id: 'mascate-melancia',
    name: 'Mascate Melancia',
    ingredients: 'Melancia, framboesa, rum, hibisco e limão-siciliano.',
    tagline: 'Leve e refrescante.',
    image: 'lata-mascate-melancia',
    alt: 'Arte com a lata inteira do Mascate Melancia e os ingredientes do drink',
  },
  {
    id: 'gin-tropical',
    name: 'Gin Tropical',
    ingredients: 'Gin, maracujá e pomelo.',
    tagline: 'Cítrico e muito refrescante.',
    image: 'lata-gin-tropical',
    alt: 'Arte com a lata inteira do Gin Tropical e os ingredientes do drink',
  },
  {
    id: 'pink-lemonade',
    name: 'Pink Lemonade',
    ingredients: 'Vodka, morango, hibisco e limão.',
    tagline: 'Frutada e doce na medida.',
    image: 'lata-pink-lemonade',
    alt: 'Arte com a lata inteira do Pink Lemonade e os ingredientes do drink',
  },
  {
    id: 'mojito',
    name: 'Mojito',
    ingredients: 'Rum, hortelã e limão.',
    tagline: 'O clássico que nunca falha.',
    image: 'lata-mojito',
    alt: 'Arte com a lata inteira do Mojito e os ingredientes do drink',
  },
]
