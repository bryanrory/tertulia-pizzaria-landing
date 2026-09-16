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

Dois cards já usam fotos reais:

| Card | Arquivos | Formato |
|---|---|---|
| Transmissão | `fotos/corrente-antes.jpg` / `-depois.jpg` | deitadas, 3:2 |
| Freios | `fotos/disco-antes.jpg` / `-depois.jpg` | em pé, cortadas em 2:3 |

Um card com foto leva a classe `shot--par`. Some `shot--larga` quando as
fotos forem deitadas: aí o card ocupa a linha inteira e empilha as duas no
celular. Sem ela, o card tem o tamanho normal e as fotos ficam lado a lado.

Dois ajustes finos ficam no próprio `<figure>`, como variáveis CSS:

- `--ba-ratio` é o formato de cada metade. O padrão é `7/8`; o card de
  freios usa `2/3` para casar a altura com os cards de ilustração.
- `--ba-pos` é de onde vem o recorte, igual ao `object-position`. O card de
  freios usa `left`, para que o corte tire o fundo desfocado da direita em
  vez do disco.

Os outros cards ainda usam ilustrações. Para trocar um deles, copie a
estrutura de um card de foto, troque os dois `<img>` e ajuste `width`,
`height` e o `alt`. As fotos entram com no máximo 1400px de largura em JPEG,
o que basta para telas grandes sem pesar. A categoria fica em `data-cat`
(`transmissao`, `freios`, `geral`) e é o que o filtro usa.

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
