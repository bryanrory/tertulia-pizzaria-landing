# Landing Page Tertúlia — Design Spec

## Objetivo
Landing page comercial de conversão para Restaurante e Pizzaria Tertúlia (Timbó-SC), estética artesanal/editorial/gastronômica premium, sem clichês de IA (sem gradiente roxo/azul, sem cards genéricos com sombra pesada).

## Dados do cliente
- Nome: Restaurante e Pizzaria Tertúlia
- WhatsApp: +55 47 3382-8318 — `https://wa.me/554733828318`
- Endereço: Rua Blumenau, 2070 - Timbó, SC - CEP 89120-000
- Cardápio digital: `https://cardapio.link/pizzariaerestaurantetertulia`
- Instagram: `https://www.instagram.com/restauranteepizzariatertulia/`
- Almoço: todos os dias, 11h–14h. Buffet KG/livre R$69,90; marmita a partir de R$25,00.
- Rodízio noturno: terça a domingo, 18h30–23h. Pizza artesanal + comida japonesa + saladas, a partir de R$65,90.
- Logo oficial: `Screenshot_logo_baixa_resolucao.png` na raiz do projeto (fundo preto, "TERTÚLIA" branco itálico + "RESTAURANTE E PIZZARIA" vermelho, fatia de pizza vermelha/verde).

## Decisões de escopo (aprovadas)
1. CTA "Ver Cardápio" abre `cardapio.link` em nova aba (`target="_blank" rel="noopener"`).
2. Fotos: Unsplash de alta qualidade para esta demo (comentário HTML avisando trocar por fotos reais do cliente).
3. Status de funcionamento no header: calculado em tempo real via JS (hora local do navegador), cobrindo almoço, rodízio e segunda-feira fechada à noite.
4. Seção Localização inclui iframe do Google Maps embutido + botão "Como Chegar" (link `https://www.google.com/maps/search/?api=1&query=...`).

## Paleta e tipografia
- `--bg-dark: #121212` (fundo principal)
- `--bg-darker: #0a0a0a` (seções alternadas)
- `--red: #D32F2F` (acento primário, botões, badges)
- `--white: #F5F5F0`
- `--green: #2E7D32` (WhatsApp, badge japonesa)
- `--gold: #F5A623` (badges destaque)
- Títulos: `Oswald` (Google Fonts), caixa alta, bold/italic para remeter ao logo.
- Corpo: `Plus Jakarta Sans` (Google Fonts).

## Estrutura de arquivos
- `index.html` — marcação semântica de todas as seções.
- `styles.css` — variáveis CSS, layout responsivo (mobile-first), componentes.
- `script.js` — lógica de status em tempo real, alternância de tabs Dia/Noite, menu mobile (se necessário), sticky bottom bar.
- `Screenshot_logo_baixa_resolucao.png` — logo usado no header e footer.

## Seções (ordem no `index.html`)
1. **Header fixo** — logo (img), status dinâmico (span atualizado por JS), nav com âncoras, botões "Ver Cardápio" e "WhatsApp".
2. **Hero** — imagem de fundo (Unsplash pizza), overlay escuro, H1, subtítulo, CTA duplo (vermelho = cardápio externo, verde = WhatsApp `wa.me` com mensagem pré-definida de reserva).
3. **Experiência Dia vs Noite** — dois botões de tab (`Almoço` / `Rodízio Noturno`), painel de conteúdo alternado via JS (`hidden` attribute), cada painel com foto, descrição, preço, horário.
4. **Showcase Gastronômico** — grid de 6 cards (fotos Unsplash: pizza salgada, pizza doce, buffet sushi, salada, prato executivo, marmita) cada card com badge (“Mais Pedida”, “Massa Artesanal”, “Incluso no Rodízio”, etc.).
5. **Localização** — endereço, iframe Google Maps (embed sem necessidade de API key, usando `https://www.google.com/maps?q=...&output=embed`), lista de horários (almoço/rodízio), botão "Como Chegar".
6. **Footer** — logo pequeno, Instagram, WhatsApp, endereço, copyright.
7. **Sticky bottom bar mobile** — fixa, `display:none` acima de 768px, dois botões: WhatsApp e Ver Cardápio.

## Lógica JS (script.js)
- `getStatus()`: usa `new Date()` local, retorna texto e classe (`aberto`/`fechado`) considerando:
  - Domingo a sábado, 11h–14h → "Aberto para Almoço · Fecha às 14h".
  - Fora do almoço, terça a domingo, 18h30–23h → "Rodízio Aberto · Fecha às 23h".
  - Terça a domingo, antes das 18h30 (e depois das 14h) → "Abriremos às 18h30 para o Rodízio".
  - Segunda-feira fora do horário de almoço → "Fechado hoje à noite · Abrimos amanhã às 11h".
  - Fora de todo horário (madrugada) → "Fechado · Abrimos às 11h".
  - Atualiza a cada 60s com `setInterval`.
- `initTabs()`: click listener nos botões de tab, alterna `hidden` nos painéis e classe `active` nos botões.
- Sticky bottom bar: sempre visível em mobile via CSS `@media`, sem JS necessário (JS só usado se precisar esconder ao scroll — não necessário, YAGNI).

## Testes/Verificação (sem framework — site estático)
- Abrir `index.html` no navegador (Live Server ou file://) e verificar:
  - Header sticky, logo renderiza, status muda corretamente simulando horários (via `Date` mockado no devtools console).
  - Tabs alternam conteúdo Dia/Noite.
  - CTAs abrem WhatsApp (`wa.me`) e cardápio externo corretamente.
  - Iframe do mapa carrega.
  - Responsivo em 375px (mobile) e 1440px (desktop): sticky bottom bar aparece só no mobile.
- Validar HTML sem erros graves (tags fechadas, atributos `alt` em imagens).

## Fora de escopo
- Backend, formulários com envio de dados, animações GSAP complexas, build step (Vite/webpack), fotos reais do cliente (troca posterior).
