import React from 'react';

const TONES = {
  white: { bg: '#fff', fg: 'var(--navy)', logo: 'black' },
  tint: { bg: 'var(--violet-200)', fg: 'var(--navy)', logo: 'black' },
  lilac: { bg: 'var(--violet-300)', fg: 'var(--navy)', logo: 'black' },
  violet: { bg: 'var(--violet-500)', fg: '#fff', logo: 'white' },
  dark: { bg: 'var(--navy)', fg: '#fff', logo: 'white' },
};
const BASE = (typeof window !== 'undefined' && window.SERENIS_ASSET_BASE) || '';

/** Instagram post/carousel slide on the native 1080-wide canvas, scaled with `scale`. */
export function SocialSlide({ tone = 'white', format = 'portrait', showLogo = true, align = 'left', scale = 1, base = BASE + 'assets/logo/', children, style }) {
  const t = TONES[tone] || TONES.white;
  const H = format === 'square' ? 1080 : format === 'story' ? 1920 : 1350;
  return (
    <div style={{ width: 1080 * scale, height: H * scale, overflow: 'hidden', flex: 'none', ...style }}>
      <div style={{
        width: 1080, height: H, transform: `scale(${scale})`, transformOrigin: '0 0', background: t.bg, color: t.fg,
        position: 'relative', boxSizing: 'border-box', padding: '250px 100px 100px', fontFamily: 'var(--font-body)',
        display: 'flex', flexDirection: 'column', textAlign: align, alignItems: align === 'center' ? 'center' : 'stretch',
      }}>
        {showLogo && <img src={base + (t.logo === 'white' ? 'serenis-logo-white.svg' : 'serenis-logo-black.svg')} alt="Serenis" style={{ position: 'absolute', left: 100, top: 80, height: 56 }} />}
        {children}
      </div>
    </div>
  );
}
