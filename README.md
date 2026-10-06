# Tap & Go Jundiaí — site institucional

Landing page em React + Vite + Tailwind CSS 4, com ícones Lucide.
Todas as fotos são da própria Tap & Go, recortadas sem a interface do Instagram e otimizadas em WebP.

## Como instalar e rodar

Pré-requisito: Node.js 18 ou mais recente.

```bash
npm install
npm run dev      # abre em http://localhost:5173
```

Para gerar a versão de publicação:

```bash
npm run build    # cria a pasta dist/
npm run preview  # confere a versão final localmente
```

A pasta `dist/` pode ser enviada para qualquer hospedagem estática (Vercel, Netlify, Hostinger, Locaweb etc.).
O projeto usa caminhos relativos, então funciona na raiz do domínio ou em uma subpasta.

## Onde atualizar cada informação

| O que | Arquivo |
|---|---|
| **Número do WhatsApp** | `src/data/site.js` → constante `WHATSAPP_URL` (troque `55XXXXXXXXXXX`) |
| **Horários** | `src/data/site.js` → lista `HOURS` (vazia = mostra "Consulte os horários atualizados no Instagram") |
| Endereço, links do Instagram e do Google Maps | `src/data/site.js` |
| Taps (nome, estilo, ABV, IBU, lúpulos, foto) | `src/data/taps.js` |
| Drinks | `src/data/drinks.js` |
| Agenda (dias, datas e atrações) | `src/data/agenda.js` |
| Fotos da galeria | `src/data/gallery.js` |
| Cores e fontes | `src/index.css` → bloco `@theme` |
| Título, descrição e imagem de compartilhamento | `index.html` |

Enquanto o WhatsApp não for configurado, o site mostra "Número do WhatsApp em atualização" ao lado dos botões.

### Trocar ou adicionar fotos

1. Exporte a foto em duas larguras, em WebP: `nome-720.webp` e `nome-1320.webp`.
2. Coloque as duas em `public/images/`.
3. Registre a largura e a altura originais em `src/data/images.js`.
4. Use `nome` no campo `image` do tap, drink ou foto da galeria.
   O campo `position` ajusta o enquadramento (ex.: `'50% 30%'` mostra mais a parte de cima).

## Antes de publicar

- A imagem de compartilhamento (`og:image` em `index.html`) aponta para `https://tap-go-jundiai.vercel.app`. Se o endereço for outro, atualize essa linha.
- Configure o número do WhatsApp.
- Se o local divulgar horários oficiais, preencha `HOURS`.

## Estrutura

```
public/
  images/                 fotos otimizadas (720 e 1320 px)
  logo.png                logo circular recortado
  favicon-32.png, icon-192.png, apple-touch-icon.png, og-image.jpg
src/
  data/                   conteúdo editável (site, taps, drinks, agenda, galeria, imagens)
  hooks/                  rolagem, seção ativa, animação de entrada
  lib/images.js           caminhos e srcset das fotos
  components/
    Header.jsx            cabeçalho fixo + menu do celular
    Hero.jsx              primeira tela
    Marquee.jsx           faixa animada
    About.jsx             "Muito além de um bar"
    TapCarousel.jsx       taps da casa
    DrinksGrid.jsx        drinks
    ExperienceGallery.jsx galeria + Lightbox.jsx
    Agenda.jsx            programação
    SmashLab.jsx          parceria gastronômica
    Location.jsx          endereço, mapa e contato
    FinalCTA.jsx          chamada final
    Footer.jsx            rodapé
    FloatingMobileCTA.jsx botão fixo "Como chegar" no celular
    ui/                   botão, imagem, etiquetas, títulos animados, ícones
```

## Detalhes técnicos

- As animações usam IntersectionObserver e CSS, sem bibliotecas extras, e são desligadas para quem ativa "reduzir movimento" no sistema.
- Fotos fora da primeira tela usam `loading="lazy"`; todas têm largura e altura definidas para evitar saltos de layout.
- Se uma foto não carregar, aparece um bloco neutro no lugar.
- O mapa é incorporado sem chave de API. Em ambientes que bloqueiam mapas incorporados, rode com
  `VITE_DISABLE_MAP_EMBED=true` para exibir um cartão com o endereço e o botão de rota.
