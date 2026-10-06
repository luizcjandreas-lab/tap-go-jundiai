/* =========================================================================
   CONFIGURAÇÕES GERAIS DO SITE
   Edite este arquivo para atualizar endereço, horários e links externos.
   ========================================================================= */

export const SITE = {
  name: 'Tap & Go Jundiaí',
  street: 'R. Bom Jesus de Pirapora, 1491',
  city: 'Jundiaí, SP',
  address: 'R. Bom Jesus de Pirapora, 1491 – Jundiaí, SP',
  insideOf: 'Dentro da Skate Lab',
  openDays: 'Terça a domingo',
  hoursNote: 'Consulte os horários atualizados no Instagram',
}

/* -------------------------------------------------------------------------
   HORÁRIOS
   Enquanto a lista estiver vazia, o site mostra apenas "Terça a domingo"
   e o aviso para consultar o Instagram.
   Quando os horários oficiais forem definidos, preencha assim:

   export const HOURS = [
     { days: 'Terça a quinta', time: '00h às 00h' },
     { days: 'Sexta e sábado', time: '00h às 00h' },
     { days: 'Domingo', time: '00h às 00h' },
   ]
   ------------------------------------------------------------------------- */
export const HOURS = []

/* -------------------------------------------------------------------------
   WHATSAPP
   ATENÇÃO: substitua "55XXXXXXXXXXX" pelo número oficial da Tap & Go,
   no formato 55 + DDD + número, sem espaços ou símbolos.
   Exemplo de formato: https://wa.me/5511900000000
   ------------------------------------------------------------------------- */
export const WHATSAPP_URL = 'https://wa.me/55XXXXXXXXXXX'

// Fica verdadeiro enquanto o número acima não for substituído.
export const WHATSAPP_PENDING = WHATSAPP_URL.includes('X')

export const LINKS = {
  instagram: 'https://www.instagram.com/tapgojundiai/',
  instagramHandle: '@tapgojundiai',
  maps: 'https://www.google.com/maps/search/?api=1&query=R.+Bom+Jesus+de+Pirapora,+1491,+Jundia%C3%AD,+SP',
  // Mapa incorporado sem chave de API.
  mapsEmbed:
    'https://maps.google.com/maps?q=R.%20Bom%20Jesus%20de%20Pirapora%2C%201491%2C%20Jundia%C3%AD%2C%20SP&z=16&output=embed',
  whatsapp: WHATSAPP_URL,
}

// Em ambientes que bloqueiam mapas incorporados, defina VITE_DISABLE_MAP_EMBED=true
// para mostrar um cartão com o endereço e o botão de rota no lugar do mapa.
export const MAP_EMBED_DISABLED = import.meta.env.VITE_DISABLE_MAP_EMBED === 'true'

export const NAV = [
  { id: 'inicio', label: 'Início' },
  { id: 'a-tap', label: 'A Tap' },
  { id: 'taps', label: 'Taps' },
  { id: 'drinks', label: 'Drinks' },
  { id: 'agenda', label: 'Agenda' },
  { id: 'ambiente', label: 'Ambiente' },
  { id: 'localizacao', label: 'Localização' },
]
