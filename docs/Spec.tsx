import React from 'react';

/** A specimen card: name + subtitle outside, content inside a ~700px frame. */
export function Spec({ name, sub, flush, children }: { name: string; sub?: string; flush?: boolean; children: React.ReactNode }) {
  return (
    <section className="spec">
      <div className="spec__name">{name}</div>
      {sub && <div className="spec__sub">{sub}</div>}
      <div className={flush ? 'spec__body spec__body--flush' : 'spec__body'}>{children}</div>
    </section>
  );
}

export function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (<><h2 className="docs__group">{title}</h2><div className="docs__cards">{children}</div></>);
}

export const Swatch = ({ token, hex, note, bordered }: { token: string; hex: string; note?: string; bordered?: boolean }) => (
  <div className="sw">
    <div className="chip" style={{ background: `var(--${token})`, border: bordered ? '1px solid var(--line)' : undefined }} />
    <div className="n">{token}</div>
    <div className="v">{hex}{note ? ` · ${note}` : ''}</div>
  </div>
);
