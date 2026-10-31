The Serenis logo (wordmark, payoff lockup, pittogramma) and the secondary vertical logos; use it wherever the brand mark appears.

```jsx
<Logo color="violet" height={32} base="../../assets/logo/" />
<Logo color="white" vertical="psicologia" layout="compact" height={40} />
<Logo variant="mark" color="white" height={48} />
```

- `color`: only `violet`, `black`, `white` — never recolour the SVGs.
- `vertical` + `layout="horizontal"|"compact"` builds the secondary logo (logo + vertical name).
- Set `base` (or `window.SERENIS_ASSET_BASE`) so the SVG paths resolve from your page.
