# Serenis Design System

Serenis is an online health and wellbeing platform. A person fills in an entry questionnaire, the system matches them with a professional, and a continuous care path (percorso) starts from there. Three services live inside Serenis:

- **Psicologia** — the core of the company and the largest share of revenue.
- **Nutrizione** — growing well organically on Instagram; its Reels perform.
- **Medicina**.

Each area has its own Instagram profile. **This system is built for the Instagram "psicologia" profile**, which has never taken off; nutrizione is the internal benchmark.

**Mission:** rendere più accessibile il benessere fisico e mentale.

## Sources
All material came from files uploaded to this project (`uploads/`), plus the brief pasted by the user. No Figma, codebase or website was provided. Five phone screenshots of the live Instagram profile **serenis.it** (profile, grid, three posts) are in `uploads/` and are the reference for the social UI kit and slide layouts.
- Logos: `serenis logo digital (black|violet|white).svg`, `serenis logo payoff digital (black|default|white).svg`, `serenis pittogramma digital (black|default|white).svg`. The uploaded SVGs had their `<style>` stripped (all rendered black); fills were re-applied per file name in `assets/logo/` (violet = `#7A59F5`, the illustration violet).
- Fonts: `fonts/DegularDisplay-Semibold.otf` (titles) and `fonts/MonaSans-Black.ttf`. Mona Sans Regular/Bold load from Google Fonts.
- Illustrations: 29 PNG/SVG files (Mino and hands), copied to `assets/illustrations/` with ASCII names.

## Index
- `styles.css` — entry point (imports only) → `tokens/fonts.css`, `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`
- `assets/logo/` — 9 logo SVGs · `assets/illustrations/` — 29 illustrations · `fonts/` — Mona Sans Black
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/` — React primitives (see Components)
- `ui_kits/instagram/` — Instagram profile serenis.it: grid + post feed (rebuilt from screenshots)
- `SKILL.md` — Agent Skill entry point · `thumbnail.html` — project tile

## Components
Namespace: `window.SerenisDesignSystem_452571`.
- **brand/** — `Logo` (wordmark, payoff, pittogramma, secondary vertical logos), `Illustration` (+ `ILLUSTRATIONS` map), `Wave`
- **core/** — `Button`, `Tag`, `Card`
- **forms/** — `ChoiceOption`, `TextField` (entry questionnaire)
- **social/** — `SocialSlide` (1080×1350 / 1080 / 1920 canvas), `Statement`

Intentional additions (no source component library was provided, so all components are authored from the brand guidelines): `SocialSlide` and `Statement` exist because the deliverable is Instagram content; `Wave` approximates the wavy photo shapes described in the brief (no vector supplied).

Set `window.SERENIS_ASSET_BASE` to the path of the project root (e.g. `'../../'`) before using Logo/Illustration/SocialSlide so image paths resolve.

## CONTENT FUNDAMENTALS
Language: **Italian**. The brand speaks as one person: the most empathetic person you know, doubled. Takes the job seriously without making it weigh. Positive even when smiling isn't easy.

Three traits:
- **Responsabile** — the work affects people's health, so communication must be much better than average. Accurate, no overpromising, no clinical scare words, no diagnosing in a caption.
- **Leggero** — "per convincere le persone a prendersi cura di sé non possiamo addormentarle". Short sentences, everyday words, a touch of irony, never jokes about the person's pain.
- **Coraggioso** — believe and take risks. Say the direct thing ("Non sei pigro. Forse sei solo stanco.") rather than the safe generic one.

Rules:
- Address the reader as **tu**, informal. Serenis is **noi** ("ti abbiniamo", "ci sono persone reali").
- Sentence case everywhere, headlines included. No ALL CAPS except tiny labels.
- Headlines are a full, short sentence with a full stop. One idea per slide.
- Tackle practical and cultural obstacles: cost ("Il primo colloquio è gratuito"), stigma ("Puoi andare dallo psicologo anche quando va tutto bene"), not knowing where to start ("Tre cose da dire al primo colloquio").
- Avoid stereotyped distress language and imagery (head-in-hands, "sei depresso?"). Avoid therapy jargon unless it's explained.
- CTA verbs: Inizia, Prenota, Scopri, Salva il post. "Link in bio" is fine.
- Emoji: used, sparingly. 💜 is the signature (end of a headline or caption, "Le abbiamo chieste a voi 💜"), plus 🫂, 👇, 🏥 in bio and captions. Never more than one per line.
- Carousel covers often end the headline with ":" to pull the swipe ("La depressione può avere molte facce:"). Covers voice the audience in first person ("Frasi della mia terapeuta che…") and quote community answers ("Le abbiamo chieste a voi"). Captions open with context and are cut by "altro".
- Gender-neutral where possible (Mino is neither male nor female).

Examples from the live profile: "Soffrire di depressione non significa solamente stare tutto il giorno al buio a piangere." · "L’ansia non si presenta sempre con gli attacchi di panico." · "35 idee di appuntamento che non sono una cena fuori 💜" · "Ascoltare la rabbia significa riconoscere che dietro una vetrina rotta può nascondersi un disagio che è stato ignorato."

Older examples written for this system: "Fai una pausa caffè anche con te stesso." · "Come stai, davvero?" · "Il percorso si fa in due." · "Anche 'non lo so' è una risposta valida."

## VISUAL FOUNDATIONS
- **Colour.** Psicologia = violet. `--violet-500 #7A59F5` (logo, illustration line, CTAs) and `--violet-100 #EBE9FE` (illustration blob, tinted grounds) are the two source colours; the rest of the scale is derived. White is the main ground. `--violet-900` for dark slides. Social text and the "black" logo are a deep navy (`--navy #1E1C3A`, per the screenshots), not pure black. Neutrals are slightly violet-tinted. The logo may appear only in violet, white or black, on high-contrast grounds (see "Approved pairings"). Nutrizione/medicina palettes were not supplied.
- **Type.** Titles: Degular Display Semibold — soft-cornered grotesk, tight leading (0.95), slight negative tracking. Text: Mona Sans Regular/Bold. On the 1080 canvas headlines are 72–132px and body 36–44px. Mona Sans Black only for rare numerals/emphasis.
- **Backgrounds.** Flat colour fields: white, lavender, violet, deep violet. No gradients, no textures, no patterns. Photos full-bleed or in large rounded crops.
- **Wavy shapes.** White or violet undulating shapes overlap photos to soften edges and point to a detail. They're the only graphic ornament.
- **Illustration.** Single-weight violet line, hand-drawn feel, sitting on an offset lavender blob (fill doesn't align exactly with the line). Two families: **Mino** (the "omino", a soft ghost-like figure with dot eyes, neither male nor female, shown in moods and everyday scenes) and **hands** (gestures, counting, high-fives, giving). Hands = trust and human presence. Never recolour, never draw new ones. Most Mino PNGs are opaque on white (omino-1, -2, annoiato, appoggiato, appoggiato-2, cade, cucu, zoom, zoom-1): place them only on white, or inside a white circle/rounded block on coloured slides. Hands, omino-caffe and the SVGs are transparent.
- **Photography.** Professionals and users using the service online and offline. Realistic, natural light, real homes and studios; avoid glossy stock and stereotyped expressions of distress. Warm-neutral colour, no heavy filters. (No photos were supplied.)
- **Shape & radii.** Soft and generous, echoing the pittogramma: 16px inputs/options, 28px cards, 36–48px blocks on social, pill buttons and tags.
- **Cards.** Flat; white with 1px `--line` hairline, or solid lavender/violet. Shadow only for floating UI (`--shadow-soft`, violet-tinted). No coloured left borders.
- **Borders.** 1px hairline for structure; 1.5px for interactive outlines.
- **Layout (from the live profile).** 1080×1350 portrait. Small logo top-left (≈56px high, 100px from left, 80px from top), navy on light grounds and white on violet/navy. Headline in Degular Display Semibold ≈88px, line-height ≈1.08, left-aligned from y≈250, or centred for list/quote posts. Supporting line in Mona Sans Regular ≈40px. No footer, no page counter, no CTA on the canvas. Grounds: white, lavender `--violet-200`, lilac `--violet-300`, violet `--violet-500`, navy `--navy #1E1C3A`. Typographic patterns (one phrase repeated in tiny caps over a full violet slide) and a hand-lettered violet-on-white label ("ASCOLTARE LA RABBIA") are used as hooks. Illustrations sit centred between two text blocks. Reels are face-to-camera videos with on-screen captions in violet italic with a white outline. The grid crops posts to 3:4.
- **Motion.** Calm and soft: `--ease-soft` (cubic-bezier(.3,.7,.3,1)), 140/240/480ms. Fades and slides; no bounces or spins. Carousels glide.
- **Hover / press.** Hover = one step darker (violet-500 → 600) or lavender wash for ghost/outline. Press = scale(0.97). Focus = violet border + 4px lavender ring.
- **Transparency & blur.** Avoided. Only small dark-translucent badges on media.

## ICONOGRAPHY
No icon set was supplied. The brand communicates through the illustrations (Mino and hands) instead of icons; on social, numbers in Degular Display and Tags do the job icons would. In the Instagram kit, platform chrome icons use **Lucide** (lucide-static@0.454.0, CDN) as a substitute for Instagram's own icons. Emoji appear in copy (💜 🫂 👇) but not as icons. If an icon set is needed for product UI, a rounded line set (e.g. Lucide at 1.5–2px stroke, violet-500) would match the illustration line — this would be a substitution and should be confirmed.

## Caveats
- Mona Sans Regular/Bold load from Google Fonts; only the Black weight is local.
- The "black" logo files are recoloured navy #1E1C3A to match the screenshots; their original fill was lost.
- Reel video frames and photos aren't available: reel tiles show a dark field with caption styling only. The "Ascoltare la rabbia" hand lettering is approximated with Degular in a white pill.
- Secondary logos (logo + "psicologia") are reconstructed from the description; replace with official files.
- Wave shape is an approximation.
