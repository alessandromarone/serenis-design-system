import React from 'react';

const SIZES = { s: { h: 36, px: 16, fs: 14 }, m: { h: 48, px: 24, fs: 16 }, l: { h: 60, px: 32, fs: 18 } };
const VARIANTS = {
  primary: { bg: 'var(--violet-500)', fg: '#fff', bd: 'var(--violet-500)', hover: 'var(--violet-600)' },
  secondary: { bg: 'var(--violet-100)', fg: 'var(--violet-800)', bd: 'var(--violet-100)', hover: 'var(--violet-200)' },
  outline: { bg: 'transparent', fg: 'var(--violet-500)', bd: 'var(--violet-500)', hover: 'var(--violet-50)' },
  inverse: { bg: '#fff', fg: 'var(--violet-600)', bd: '#fff', hover: 'var(--violet-100)' },
  ghost: { bg: 'transparent', fg: 'var(--violet-600)', bd: 'transparent', hover: 'var(--violet-50)' },
};

export function Button({ variant = 'primary', size = 'm', disabled, fullWidth, iconRight, children, onClick, style }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = VARIANTS[variant], s = SIZES[size];
  return (
    <button disabled={disabled} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      style={{
        height: s.h, padding: `0 ${s.px}px`, fontSize: s.fs, fontFamily: 'var(--font-body)', fontWeight: 700,
        borderRadius: 'var(--radius-pill)', border: `1.5px solid ${v.bd}`, background: hover && !disabled ? v.hover : v.bg, color: v.fg,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, width: fullWidth ? '100%' : undefined,
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.4 : 1,
        transform: press && !disabled ? 'scale(0.97)' : 'none', transition: 'background var(--dur-fast) var(--ease-soft), transform var(--dur-fast) var(--ease-soft)', ...style,
      }}>
      {children}{iconRight && <span aria-hidden="true">{iconRight}</span>}
    </button>
  );
}
