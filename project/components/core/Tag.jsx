import React from 'react';

const TONES = {
  brand: { bg: 'var(--violet-500)', fg: '#fff' },
  soft: { bg: 'var(--violet-100)', fg: 'var(--violet-800)' },
  white: { bg: '#fff', fg: 'var(--violet-600)' },
  outline: { bg: 'transparent', fg: 'var(--violet-600)', bd: 'var(--violet-500)' },
  dark: { bg: 'var(--violet-900)', fg: '#fff' },
};

export function Tag({ tone = 'soft', size = 'm', children, style }) {
  const t = TONES[tone];
  const s = size === 's' ? { h: 24, px: 10, fs: 12 } : size === 'l' ? { h: 44, px: 20, fs: 18 } : { h: 32, px: 14, fs: 14 };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', alignSelf: 'flex-start', height: s.h, padding: `0 ${s.px}px`, borderRadius: 'var(--radius-pill)',
      background: t.bg, color: t.fg, border: `1.5px solid ${t.bd || t.bg}`, fontFamily: 'var(--font-body)', fontWeight: 700,
      fontSize: s.fs, whiteSpace: 'nowrap', boxSizing: 'border-box', ...style,
    }}>{children}</span>
  );
}
