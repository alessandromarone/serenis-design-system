import React from 'react';

const TONES = {
  white: { bg: '#fff', fg: 'var(--ink)', bd: 'var(--line)' },
  tint: { bg: 'var(--violet-100)', fg: 'var(--violet-900)', bd: 'var(--violet-100)' },
  brand: { bg: 'var(--violet-500)', fg: '#fff', bd: 'var(--violet-500)' },
  dark: { bg: 'var(--violet-900)', fg: '#fff', bd: 'var(--violet-900)' },
};

export function Card({ tone = 'white', eyebrow, title, children, media, padding = 24, radius = 'var(--radius-l)', elevated, style }) {
  const t = TONES[tone];
  return (
    <div style={{
      background: t.bg, color: t.fg, border: `1px solid ${t.bd}`, borderRadius: radius, overflow: 'hidden',
      boxShadow: elevated ? 'var(--shadow-soft)' : 'none', display: 'flex', flexDirection: 'column', ...style,
    }}>
      {media}
      <div style={{ padding, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {eyebrow && <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, opacity: 0.75 }}>{eyebrow}</div>}
        {title && <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 26, lineHeight: 1.05, letterSpacing: '-0.01em', textWrap: 'pretty' }}>{title}</div>}
        {children && <div style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.45, textWrap: 'pretty' }}>{children}</div>}
      </div>
    </div>
  );
}
