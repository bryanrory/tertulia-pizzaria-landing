# Oficina Dos Guri — Landing Page

Landing page de página única, estática, sem build e sem dependências.
Basta abrir o `index.html` ou subir os três arquivos em qualquer hospedagem
(GitHub Pages, Netlify, Vercel, Hostinger, etc.).

```
oficina-dos-guri/
├── index.html   estrutura e conteúdo
├── style.css    tema "Industrial Garage Dark Mode" (CSS Variables, mobile first)
└── script.js    menu mobile, FAQ, filtro da galeria e scroll reveal
```

## O que editar antes de publicar

| Onde | O quê |
|---|---|
| `index.html` → seção `#localizacao` | Horários e formas de pagamento. O endereço já está preenchido: Rua Orídio Martins, 56, Testo Salto, Blumenau/SC. |
| `index.html` → seção `#antes-depois` | Trocar as ilustrações por fotos reais (veja abaixo). |

O endereço aparece em três lugares que devem mudar juntos: o bloco de
localização, o rodapé e o `application/ld+json` no `<head>`, que é o que
Google e afins leem para mostrar o negócio no mapa.

## Fotos da galeria

O primeiro card já usa fotos reais, em `fotos/corrente-antes.jpg` e
`fotos/corrente-depois.jpg`. Ele leva a classe `shot--par`, que faz o card
ocupar a linha inteira e mostrar as duas fotos lado a lado no computador e
uma embaixo da outra no celular, cada uma em 3:2.

Os outros cards ainda usam ilustrações SVG. Para transformar um deles em
card de foto, copie a estrutura do primeiro card, troque os dois `<img>` e
ajuste `width`, `height` e o texto do `alt`.

As fotos entram com 1400px de largura no máximo e JPEG de qualidade 82, que
é o suficiente para telas grandes sem pesar no carregamento. A categoria do
card fica no atributo `data-cat` (`transmissao`, `freios`, `geral`) e é o que
o filtro usa.

## Contato: só Instagram

Todos os botões de contato levam para
`https://www.instagram.com/oficinadosguri_oficial/` (navbar, hero, os quatro
cards de serviço, bloco de portfólio, localização, CTA final, rodapé e botão
flutuante). Os links estão escritos direto no `index.html`, então funcionam
mesmo sem JavaScript. Se o @ mudar, é um localizar/substituir pela URL acima.

### Quando o WhatsApp existir

Para acrescentar o WhatsApp depois, troque o `href` dos botões de ação por
`https://wa.me/55DDNUMERO?text=` seguido da mensagem codificada, ou reative
um botão flutuante extra dentro de `<div class="floats">`.

## Detalhes técnicos

- Mobile first, com quebras em 600px e 900px.
- Cores, espaçamentos, raios e sombras em CSS Variables no `:root`.
- Fontes: Space Grotesk (títulos) e Plus Jakarta Sans (texto), via Google Fonts.
- Ícones em SVG inline — nenhum CDN de biblioteca de ícones.
- Respeita `prefers-reduced-motion`: desliga reveal, pulso e marquee.
- Acessibilidade: skip link, foco visível, `aria-expanded` no menu e no FAQ.
