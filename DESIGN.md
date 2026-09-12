# DESIGN.md — Mensageiros da Esperança (Landing Page)

Design system contract para a landing page (`index.html` + `landing.css`).
Escopo: somente a página pública de entrada. As páginas administrativas (login, dashboard, cursos, inscrições, presença) mantêm `style.css` intocado.

## 1. Direção & Atmosfera

**Calor e esperança.** Uma manhã dourada: canvas de pergaminho quente (`#F6F1E7`), tipografia editorial em serifada, brilhos ambiente de âmbar e verde-marinho, e o logo da ONG apresentado como uma placa iluminada (double-bezel). Nada de azuis frios, nada de preto puro, nada de "AI gradient" roxo. O material assinatura é **a placa de logo com bloom de luz dourada** — o momento que o visitante lembra é o logo "aceso" no hero.

Referências de execução: `soft-skill.md` (Archetype A2 Editorial Luxury + B1 Asymmetrical layout) e `claude.md` (paleta parchment quente, hierarquia serif/sans, sombras em anel). Cores de marca vêm do logo do projeto (comentado em `style.css`).

## 2. Tokens de cor (todas com subtom quente)

```css
--canvas:    #F6F1E7;  /* pergaminho — fundo principal */
--canvas-2:  #F1EADC;  /* pergaminho mais profundo — bandas/alternância */
--surface:   #FCFAF4;  /* marfim — cards */
--surface-2: #F4EEE1;  /* areia quente — botão soft, chips */
--ink:       #22302D;  /* verde-charcoal quente — texto principal */
--ink-2:     #56655F;  /* cinza-oliva quente — texto secundário */
--ink-3:     #87948F;  /* texto terciário */
--line:      #E6DECC;  /* borda quente sutil */
--line-2:    #D8CFB8;  /* borda quente forte / hover ring */

--pine-950: #122522;  /* mais escuro */
--pine-900: #16302C;  /* banda CTA escura */
--pine-800: #1F4540;  /* botão primário */
--pine-700: #2A5C56;  /* marca */
--pine-400: #4CA48F;  /* brilho teal */
--pine-100: #E2ECE7;  /* tint de chip de ícone */

--amber-600: #E09127;  /* hover / focus */
--amber-500: #F0A93B;  /* ACENTO único — ouro da esperança */
--amber-ink: #8A5F16;  /* texto âmbar legível em canvas claro */
--amber-100: #F8EBD3;  /* tint de chip de ícone */

--shadow: 0 1px 2px rgba(34,48,45,.05), 0 18px 44px -16px rgba(34,48,45,.18);
```

Regras: um único acento cromático (âmbar). Verde-pinho é a cor de marca/produto — usado em superfícies escuras, botão primário e fichas de ícone. Nenhum azul frio ou cinza neutro puro. Sombras tingidas de verde-charcoal, nunca `rgba(0,0,0,...)`.
Texto âmbar sobre claro usa `--amber-ink`. Âmbar claro (`--amber-500`) só em fundo escuro ou como preenchimento de ícone/visual.

## 3. Tipografia

- **Display (headlines):** `Fraunces` — serifada editorial, peso 400–600, `font-optical-sizing: auto`, itálico para palavras de ênfase.
- **UI/Body:** `Manrope` 400–800.
- Fonte de Google Fonts com `preconnect` + `display=swap`. Nada de Inter/system-ui nas headlines.

Escala:
- H1 hero: `clamp(2.5rem, 6vw, 4.5rem)`, Fraunces 520, `line-height: 1.04`, tracking `-0.02em`.
- H2 seção: `clamp(2rem, 4vw, 3rem)`, Fraunces 520, `line-height: 1.12`.
- Título de card: Fraunces 560, `1.3rem`.
- Eyebrow: Manrope 700, `0.78rem`, uppercase, tracking `0.14em`.
- Body: Manrope 400/500, `1.05rem`, `line-height: 1.65`, leitura máx ~58ch.

## 4. Layout & Grid

- Container único `max-width: 1200px`, `margin-inline: auto`.
- Hero: grid em 2 colunas assimétricas (copy ~1.05fr / placa ~0.95fr); copy à esquerda, editorial. Mobile: pilha.
- Features: grid em 12 colunas **assimétrico (bento)** — cards ocupam 5/6/7 colunas (narrow/half/wide) em vez de colunas iguais, quebrando o grid simétrico. Mobile: 1 coluna.
- Como funciona: faixa `canvas-2` com 3 passos + linha pontilhada conectora (desktop).
- CTA: capítulo escuro `pine-900` (a única banda escura da página — cor de marca, não preto aleatório, e intencional como fechamento).
- Section padding generoso: `clamp(4.5rem, 10vw, 8rem)`; ingrediente base 8px, macro-espaço dobrado.

## 5. Primitivos & Estados

- **Botão (pill):** `border-radius: 999px`, `padding: .9rem 1.5rem`, Manrope 600. Hover: `translateY(-2px)` + tom de fundo escuro; active: `scale(.98)`. Transição `cubic-bezier(.32,.72,0,1)`, 280–400ms. Variantes: `--primary` (pine-800), `--gold` (amber-500, texto `#3A2A08`), `--soft` (surface-2, ring `line`).
- **Ícone em botão:** wrapper circular ou ícone Lucide; arrow translate `+3px` no hover do grupo.
- **Card de feature:** superfície marfim, radius 20px, ring `1px line`, whisper shadow. Hover: `translateY(-4px)`, ring `line-2`, chip de ícone troca para tint âmbar. Número índice serifado `0X` em `line-2`.
- **Chip de ícone:** squircle 44px, radius 13px, tintes alternando `pine-100`/`amber-100`.
- **Nav:** barra full-bleed fixa, vidro quente (`rgba(246,241,231,.72)` + `backdrop-filter: blur(14px)`), ring inferior `line`. Classe `.scrolled` no scroll adiciona sombra tintada. Monograma sérico "M" (ouro sobre pine) + nome em texto.
- **Placa de logo (double-bezel):** shell (radius 24px, ring `line-2`, gradiente quente + highlight inset) → core branco (radius 18px, sombra fofa) → imagem `logo.jpg` (radius 12px). É o objeto focal iluminado.
- **Estados de teclado:** `:focus-visible` ring âmbar `3px`, offset 3px; skip-link visível no foco.
- **Reduced motion:** `prefers-reduced-motion: reduce` desativa todas as animações e aplica `.is-in` imediatamente.

## 6. Movimento (todos via transform/opacity, GPU)

- **Entrada (assinatura):** no load, a placa sobe com fade + bloom dourado (`box-shadow` âmbar suave se expande) e o copy fade-up com `--d` staggered (0–180ms).
- **Reveal por scroll:** `IntersectionObserver` adiciona `.is-in`; fade-up `translateY(18px) → 0` + opacity, 640ms, `cubic-bezier(.22,.9,.3,1)`, com `--d` até 120ms. Nada de scroll-listener manual.
- **Hover/press:** conforme primitivos. Apenas elementos interativos animam. Sem motion decorativo persistente (brilhos são estáticos — atmosfera, não animação).

## 7. Acessibilidade & Restrições

- HTML semântico: `nav`, `header`, `main`, `section`, `footer`, `figure`.
- Alt descritivo no logo (`Mensageiros da Esperança — logotipo da ONG`).
- Skip-link "Pular para o conteúdo" (`a11y.skip`) antes da nav.
- Contraste AA: `--ink` sobre `--canvas` ≈ 13:1; `--ink-2` sobre `--canvas` ≈ 6:1; texto âmbar claro só usa `--amber-ink` em claro.
- Target touch ≥ 44px (botões pills confortáveis).
- `min-height` hero em `svh` com fallback `vh` (sem `100vh` fixo / jump mobile).

## 8. Dívida aceita

- Ícones Lucide via CDN `unpkg` (padrão já usado em `login.html`); depende de rede.
- Fontes via Google Fonts CDN.
- As páginas administrativas não foram modernizadas (fora de escopo desta tarefa).