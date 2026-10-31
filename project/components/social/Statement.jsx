import React from 'react';

/** Big headline block for social slides, optional supporting line and hand-marker label. */
export function Statement({ marker, children, sub, size = 'l', style }) {
  const fs = size === 'xl' ? 110 : size === 'm' ? 72 : 88;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48, ...style }}>
      {marker && <div style={{ alignSelf: 'flex-start', background: '#fff', color: 'var(--violet-500)', borderRadius: '44px 36px 48px 40px', padding: '26px 48px', margin: '0 -40px', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 96, lineHeight: 1, textTransform: 'uppercase', letterSpacing: '-0.01em' }}>{marker}</div>}
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: fs, lineHeight: 1.08, letterSpacing: '-0.02em', textWrap: 'pretty' }}>{children}</div>
      {sub && <div style={{ fontFamily: 'var(--font-body)', fontSize: size === 'xl' ? 52 : 40, lineHeight: 1.3 }}>{sub}</div>}
    </div>
  );
}
