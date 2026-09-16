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

Os seis cards usam fotos reais:

| Card | Arquivos |
|---|---|
| Transmissão | `fotos/corrente-antes.jpg` / `-depois.jpg` |
| Freios | `fotos/disco-antes.jpg` / `-depois.jpg` |
| Revisão geral | `fotos/bike-antes.jpg` / `-depois.jpg` |
| Cassete | `fotos/cassete-antes.jpg` / `-depois.jpg` |
| Cabo de freio | `fotos/cabo-antes.jpg` / `-depois.jpg` |
| Roda | `fotos/roda-antes.jpg` / `-depois.jpg` |

Todos os cards da galeria, com foto ou com ilustração, têm o mesmo tamanho.
A moldura é 2:1, então cada metade é um quadrado, e a foto entra com
`object-fit: cover`. Ela preenche o quadrado inteiro e o que passar do
tamanho é cortado pelo centro, seja a foto deitada, em pé ou quadrada. Não
existe ajuste por card: é a mesma regra para qualquer foto que você colocar.

Se alguma foto ficar cortada num ponto ruim, dá para escolher de onde sai o
corte com `object-position` só naquele `<img>`, por exemplo
`style="object-position:left"` para o corte tirar o lado direito.

Para acrescentar um card novo, copie um `<figure class="shot shot--par">`
inteiro, troque os dois `<img>`, a legenda e o `data-cat`. Cada foto é assim:

```html
<img class="ba__foto" src="fotos/nome-antes.jpg" width="1400" height="933"
     loading="lazy" decoding="async" alt="descreva o que aparece">
```

Os atributos `width` e `height` são as dimensões reais do arquivo e servem
para o navegador reservar o espaço antes de a imagem carregar. As fotos
entram com no máximo 1400px de largura em JPEG, o que basta para telas
grandes sem pesar. A categoria fica em `data-cat` (`transmissao`, `freios`,
`geral`) e é o que o filtro usa.

## Contato: só Instagram

Todos os botões de contato levam para
`https://www.instagram.com/oficinadosguri.oficial/` (navbar, hero, os quatro
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
