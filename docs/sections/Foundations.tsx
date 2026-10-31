import { Group, Spec, Swatch } from '../Spec';

const VIOLET: [string, string][] = [
  ['50', '#F6F5FF'], ['100', '#EBE9FE'], ['200', '#D9D3FD'], ['300', '#BBAEFB'], ['400', '#9A85F8'],
  ['500', '#7A59F5'], ['600', '#6442E0'], ['700', '#4F32B8'], ['800', '#3A2589'], ['900', '#241857'],
];
const NEUTRALS: [string, string, boolean?][] = [
  ['ink', '#141414'], ['ink-2', '#3D3A47'], ['ink-3', '#6B6878'], ['line', '#E2E0EA'], ['paper-2', '#FAF9FD', true], ['paper', '#FFFFFF', true],
];
const PAIRS: { label: string; bg: string; fg: string; line?: boolean }[] = [
  { label: 'Violet on white', bg: '#fff', fg: 'var(--violet-500)', line: true },
  { label: 'White on violet', bg: 'var(--violet-500)', fg: '#fff' },
  { label: 'Violet 900 on lavender', bg: 'var(--violet-100)', fg: 'var(--violet-900)' },
  { label: 'White on violet 900', bg: 'var(--violet-900)', fg: '#fff' },
  { label: 'Ink on white', bg: '#fff', fg: 'var(--ink)', line: true },
];
const DISPLAY: [string, number, number][] = [
  ['display-xl · 120px', 60, 1], ['display-l · 88px', 48, 1], ['display-m · 64px', 38, 1], ['display-s · 44px', 30, 1],
  ['h1 · 36px', 36, 1], ['h2 · 28px', 28, 1], ['h3 · 22px', 22, 1],
];
const BODY: [string, number][] = [['body-l · 20px', 20], ['body · 16px', 16], ['body-s · 14px', 14], ['caption · 12px', 12]];
const SPACE = [4, 8, 12, 16, 24, 32, 48, 64, 96];
const RADII: [string, string][] = [['radius-s', '8px'], ['radius-m', '16px'], ['radius-l', '28px'], ['radius-xl', '48px'], ['radius-pill', '999px']];

export function Foundations() {
  return (
    <>
      <h1 className="docs__h1">Foundations</h1>
      <p className="docs__lead">Token CSS su <code>:root</code>. Il viola è il colore di psicologia; il bianco è il fondo principale; testi e logo "black" sui social sono navy, non nero puro.</p>

      <Group title="Colors">
        <Spec name="Core pair" sub="Violet 500 + Lavender 100 — the illustration palette">
          <div className="row">
            <Swatch token="violet-500" hex="#7A59F5" note="line, logo, CTA" />
            <Swatch token="violet-100" hex="#EBE9FE" note="blob fill, tint ground" />
            <Swatch token="paper" hex="#FFFFFF" note="page" bordered />
          </div>
        </Spec>
        <Spec name="Violet scale" sub="Psicologia brand colour — 500 is the logo violet">
          <div className="row">{VIOLET.map(([k, hex]) => <Swatch key={k} token={`violet-${k}`} hex={hex} bordered={k === '50'} />)}</div>
        </Spec>
        <Spec name="Neutrals" sub="Ink and lines">
          <div className="row">{NEUTRALS.map(([k, hex, b]) => <Swatch key={k} token={k} hex={hex} bordered={b} />)}</div>
        </Spec>
        <Spec name="Navy" sub="Social text and the “black” logo — from the live profile">
          <div className="row"><Swatch token="navy" hex="#1E1C3A" note="dark slide ground, text on light slides" /><div className="sw" /><div className="sw" /></div>
        </Spec>
        <Spec name="Semantic" sub="Form feedback only — never on social">
          <div className="row"><Swatch token="success" hex="#2E9E6B" /><Swatch token="warning" hex="#E0A100" /><Swatch token="danger" hex="#D64545" /></div>
        </Spec>
        <Spec name="Approved pairings" sub="Text/background combinations that keep legibility">
          <div className="row">
            {PAIRS.map(p => (
              <div key={p.label} style={{ flex: 1, background: p.bg, color: p.fg, borderRadius: 12, padding: 14, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 110, boxSizing: 'border-box', border: p.line ? '1px solid var(--line)' : undefined }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 30, lineHeight: 1 }}>Aa</div>
                <div style={{ fontWeight: 700 }}>{p.label}</div>
              </div>
            ))}
          </div>
        </Spec>
      </Group>

      <Group title="Type">
        <Spec name="Display — Degular Display Semibold" sub="Titles — self-hosted DegularDisplay-Semibold.otf">
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 72, lineHeight: 0.95, letterSpacing: '-0.02em' }}>Prenditi cura di te.</div>
          <div className="v" style={{ marginTop: 12 }}>--font-display · 600 · line-height .95 · tracking -0.02em</div>
        </Spec>
        <Spec name="Body — Mona Sans" sub="Regular for text, Bold for emphasis">
          <div style={{ fontSize: 20, lineHeight: 1.45, maxWidth: 600 }}>Compili un questionario, ti abbiniamo al professionista giusto e <b>da lì parte il tuo percorso</b>. Online, quando ti è comodo.</div>
          <div className="row" style={{ marginTop: 14, gap: 28 }}>
            <div><div style={{ fontSize: 28 }}>Aa 400</div><div className="v">Regular</div></div>
            <div><div style={{ fontSize: 28, fontWeight: 700 }}>Aa 700</div><div className="v">Bold</div></div>
            <div><div style={{ fontSize: 28, fontFamily: 'var(--font-heavy)', fontWeight: 900 }}>Aa 900</div><div className="v">Black (supplied file — use sparingly)</div></div>
          </div>
        </Spec>
        <Spec name="Heading scale" sub="Display sizes for the 1080 social canvas (shown reduced); h1–h3 for UI">
          {DISPLAY.map(([l, fs]) => (
            <div key={l} style={{ display: 'flex', alignItems: 'baseline', gap: 16, borderBottom: '1px solid var(--line)', padding: '2px 0' }}>
              <span className="v" style={{ width: 110, flex: 'none' }}>{l}</span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, lineHeight: 1, fontSize: fs, whiteSpace: 'nowrap' }}>Un passo alla volta</span>
            </div>
          ))}
        </Spec>
        <Spec name="Body scale" sub="Mona Sans sizes, line-height 1.45">
          {BODY.map(([l, fs]) => (
            <div key={l} style={{ display: 'flex', alignItems: 'baseline', gap: 16, padding: '4px 0' }}>
              <span className="v" style={{ width: 110, flex: 'none' }}>{l}</span><span style={{ fontSize: fs }}>Il primo colloquio serve a conoscervi.</span>
            </div>
          ))}
        </Spec>
      </Group>

      <Group title="Spacing">
        <Spec name="Spacing scale" sub="--space-1 … --space-9">
          <div className="row" style={{ alignItems: 'flex-end', gap: 14 }}>
            {SPACE.map((px, i) => (
              <div key={px} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <div style={{ width: px, height: px, background: 'var(--violet-300)', borderRadius: 3 }} />
                <div className="n">{i + 1}</div><div className="v">{px}</div>
              </div>
            ))}
          </div>
        </Spec>
        <Spec name="Corner radii" sub="Generous, soft corners echo the pittogramma">
          <div className="row" style={{ gap: 16 }}>
            {RADII.map(([k, v]) => (
              <div key={k} className="sw">
                <div style={{ height: 80, background: 'var(--violet-100)', border: '1.5px solid var(--violet-500)', borderRadius: `var(--${k})` }} />
                <div className="n">{k}</div><div className="v">{v}</div>
              </div>
            ))}
          </div>
        </Spec>
        <Spec name="Shadows" sub="Mostly flat; soft violet-tinted lift for floating UI only" flush>
          <div className="row" style={{ gap: 24, padding: '26px 24px', background: 'var(--paper-2)' }}>
            <div className="sw"><div style={{ height: 90, background: '#fff', border: '1px solid var(--line)', borderRadius: 16 }} /><div className="n">flat + hairline (default)</div></div>
            <div className="sw"><div style={{ height: 90, background: '#fff', borderRadius: 16, boxShadow: 'var(--shadow-soft)' }} /><div className="n">shadow-soft</div></div>
            <div className="sw"><div style={{ height: 90, background: '#fff', borderRadius: 16, boxShadow: 'var(--shadow-lift)' }} /><div className="n">shadow-lift</div></div>
          </div>
        </Spec>
      </Group>
    </>
  );
}
