import React from 'react';

export function TextField({ label, placeholder, value, onChange, hint, error, type = 'text', style }) {
  const [focus, setFocus] = React.useState(false);
  const bd = error ? 'var(--danger)' : focus ? 'var(--violet-500)' : 'var(--line)';
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-body)', ...style }}>
      {label && <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)' }}>{label}</span>}
      <input type={type} value={value} placeholder={placeholder} onChange={e => onChange && onChange(e.target.value)}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          height: 52, padding: '0 16px', borderRadius: 'var(--radius-m)', border: `1.5px solid ${bd}`, outline: 'none',
          boxShadow: focus ? '0 0 0 4px var(--violet-100)' : 'none', fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--ink)', background: '#fff',
          transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
        }} />
      {(error || hint) && <span style={{ fontSize: 13, color: error ? 'var(--danger)' : 'var(--ink-3)' }}>{error || hint}</span>}
    </label>
  );
}
