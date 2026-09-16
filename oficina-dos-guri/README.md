# Oficina Dos Guri — Landing Page

Landing page de página única, estática, sem build e sem dependências.
Basta abrir o `index.html` ou subir os três arquivos em qualquer hospedagem
(GitHub Pages, Netlify, Vercel, Hostinger, etc.).

```
oficina-dos-guri/
├── index.html   estrutura e conteúdo
├── style.css    tema "Industrial Garage Dark Mode" (CSS Variables, mobile first)
└── script.js    menu mobile, FAQ, filtro da galeria, scroll reveal, links do WhatsApp
```

## O que editar antes de publicar

| Onde | O quê |
|---|---|
| `script.js` → `CONFIG.NUMERO` | **Obrigatório.** Número do WhatsApp com DDI+DDD, só dígitos (ex.: `5547999998888`). Enquanto estiver `5500000000000`, os links não funcionam e o console avisa. |
| `script.js` → `CONFIG.MSG_PADRAO` / `MSG_SERVICO` | Textos que já vêm escritos na conversa. Em `MSG_SERVICO`, `{servico}` é trocado pelo nome do card. |
| `index.html` → seção `#localizacao` | Endereço, região de atendimento, horários e formas de pagamento (procure por `EDITE AQUI`). |
| `index.html` → rodapé | Cidade / região de atendimento (`EDITE AQUI`). |
| `index.html` → seção `#antes-depois` | Trocar as ilustrações por fotos reais (veja abaixo). |

## Trocar as ilustrações por fotos reais

Cada item da galeria tem um bloco `<div class="ba">…</div>` com uma ilustração
SVG de marcador de posição. Para usar foto, substitua o bloco inteiro por:

```html
<img class="shot__img" src="fotos/corrente.jpg" alt="Corrente antes e depois da limpeza" loading="lazy">
```

O recorte (4:3), o zoom no hover e o filtro por categoria continuam funcionando.
A categoria do card fica no atributo `data-cat` (`transmissao`, `freios`, `geral`).

## Links de Instagram

Todos apontam para `https://www.instagram.com/oficinadosguri_oficial/`
(navbar, hero, bloco de portfólio, seção de localização, rodapé e botão flutuante).
Se o @ mudar, troque as ocorrências no `index.html` e em `CONFIG.INSTAGRAM`.

## Detalhes técnicos

- Mobile first, com quebras em 600px e 900px.
- Cores, espaçamentos, raios e sombras em CSS Variables no `:root`.
- Fontes: Space Grotesk (títulos) e Plus Jakarta Sans (texto), via Google Fonts.
- Ícones em SVG inline — nenhum CDN de biblioteca de ícones.
- Respeita `prefers-reduced-motion`: desliga reveal, pulso e marquee.
- Acessibilidade: skip link, foco visível, `aria-expanded` no menu e no FAQ.
