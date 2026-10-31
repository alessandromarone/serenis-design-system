# @serenis/design-system

React + Vite + TypeScript implementation of the Serenis Design System (Instagram "psicologia" profile), built from the Claude Design bundle in `project/` (kept unchanged as reference).

## Usage
```tsx
import '@serenis/design-system/styles.css';           // once, in the app entry
import { Button, Logo, SocialSlide, Statement } from '@serenis/design-system';

<SocialSlide tone="lilac" scale={1}>
  <Statement sub="Le abbiamo chieste a voi 💜">Frasi della mia terapeuta…</Statement>
</SocialSlide>
```
Assets (logos, illustrations) and fonts are real files imported by the modules: the consumer's bundler (Vite, webpack 5, Next) emits them with hashes. `window.SERENIS_ASSET_BASE` is no longer needed; the `base` prop remains as an optional override (e.g. a CDN folder).

## Scripts
| Command | What it does |
|---|---|
| `npm run dev` | Docs site (Foundations, Brand, Componenti, Instagram kit) |
| `npm run build` | Library to `dist/` + static docs to `dist-docs/` |
| `npm test` | Vitest component tests |
| `npm run typecheck` | Strict tsc |

## Structure
- `src/styles.css` → `styles/tokens/{fonts,colors,typography,spacing}.css` + `styles/components.css` (`srn-*` classes, variants via `data-*`, hover/press/focus in CSS)
- `src/components/{brand,core,forms,social}` — Logo, Illustration, Wave · Button, Tag, Card · ChoiceOption, TextField · SocialSlide, Statement
- `src/assets/index.ts` — `ILLUSTRATIONS` (29 official), `DRAFT_ILLUSTRATIONS` (Mino a tavola, linea arcuata Fase 6 — **unofficial drafts**, to be redrawn by the illustrator), `ILLUSTRATION_VECTORS`, `LOGOS`
- `docs/` — documentation site; `docs/instagram/` ports the serenis.it kit (Lucide icons as stand-ins)
- `tests/` — component tests

## Differences from the prototype
- Same props API; added `className`, ref forwarding on Button, native attribute passthrough.
- Hover/press/focus states in CSS instead of `useState` (same values), plus the 4px lavender focus ring from the guidelines.
- A11y: `type="button"`, ChoiceOption with `role=radio|checkbox` + `aria-checked`, TextField with linked label, `aria-describedby`, `aria-invalid`.

## Caveats inherited from the bundle
Mona Sans 400/700 load from Google Fonts; secondary logos and Wave are reconstructions; "black" logo recoloured navy; nutrizione/medicina palettes missing; reel videos and inner carousel slides unavailable.
