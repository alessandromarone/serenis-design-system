import React from 'react';

const LOGO_BASE = (typeof window !== 'undefined' && window.SERENIS_ASSET_BASE) || '';
const FILES = {
  logo: { violet: 'serenis-logo-violet.svg', black: 'serenis-logo-black.svg', white: 'serenis-logo-white.svg' },
  payoff: { violet: 'serenis-logo-payoff-default.svg', black: 'serenis-logo-payoff-black.svg', white: 'serenis-logo-payoff-white.svg' },
  mark: { violet: 'serenis-pittogramma-default.svg', black: 'serenis-pittogramma-black.svg', white: 'serenis-pittogramma-white.svg' },
};
const COLOR = { violet: 'var(--violet-500)', black: 'var(--ink)', white: '#fff' };

export function Logo({ variant = 'logo', color = 'violet', vertical, layout = 'horizontal', height = 32, base = LOGO_BASE + 'assets/logo/', style }) {
  const src = base + FILES[variant === 'vertical' ? 'mark' : variant][color];
  if (!vertical) return <img src={src} alt="Serenis" style={{ height, display: 'block', ...style }} />;
  const label = <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: height * 0.62, lineHeight: 1, color: COLOR[color], letterSpacing: '-0.01em' }}>{vertical}</span>;
  if (layout === 'compact') {
    return (
      <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: height * 0.18, ...style }}>
        <img src={base + FILES.logo[color]} alt="Serenis" style={{ height, display: 'block' }} />
        {label}
      </div>
    );
  }
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: height * 0.35, ...style }}>
      <img src={base + FILES.logo[color]} alt="Serenis" style={{ height, display: 'block' }} />
      <span style={{ width: Math.max(1.5, height * 0.05), alignSelf: 'stretch', background: COLOR[color], opacity: 0.9 }} />
      {label}
    </div>
  );
}
