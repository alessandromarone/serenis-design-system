import React from 'react';

/** Answer option used in the entry questionnaire (single or multi choice). */
export function ChoiceOption({ label, selected, multi, onClick, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 14, width: '100%', minHeight: 56, padding: '14px 18px', textAlign: 'left',
        borderRadius: 'var(--radius-m)', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.3,
        border: `1.5px solid ${selected ? 'var(--violet-500)' : hover ? 'var(--violet-300)' : 'var(--line)'}`,
        background: selected ? 'var(--violet-100)' : '#fff', color: 'var(--ink)', fontWeight: selected ? 700 : 400,
        transition: 'border-color var(--dur-fast), background var(--dur-fast)', ...style,
      }}>
      <span aria-hidden="true" style={{
        flex: 'none', width: 22, height: 22, borderRadius: multi ? 6 : '50%', boxSizing: 'border-box',
        border: `2px solid ${selected ? 'var(--violet-500)' : 'var(--ink-3)'}`, background: selected ? 'var(--violet-500)' : '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>{selected && <span style={{ width: multi ? 10 : 8, height: multi ? 10 : 8, borderRadius: multi ? 2 : '50%', background: '#fff' }} />}</span>
      {label}
    </button>
  );
}
