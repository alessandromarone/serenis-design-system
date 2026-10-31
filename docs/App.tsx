import React from 'react';
import { Logo } from '@serenis/design-system';
import { Foundations } from './sections/Foundations';
import { Brand } from './sections/Brand';
import { Components } from './sections/Components';
import { InstagramKit } from './instagram/InstagramKit';

const PAGES = [
  { id: 'foundations', label: 'Foundations', el: <Foundations /> },
  { id: 'brand', label: 'Brand', el: <Brand /> },
  { id: 'components', label: 'Componenti', el: <Components /> },
  { id: 'instagram', label: 'Instagram psicologia', el: <InstagramKit /> },
] as const;

const read = () => window.location.hash.replace(/^#\/?/, '') || PAGES[0].id;

export function App() {
  const [page, setPage] = React.useState(read);
  React.useEffect(() => {
    const on = () => { setPage(read()); window.scrollTo(0, 0); };
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  const current = PAGES.find(p => p.id === page) ?? PAGES[0];
  return (
    <div className="docs">
      <aside className="docs__nav">
        <Logo color="violet" vertical="psicologia" layout="compact" height={28} />
        <nav>{PAGES.map(p => <a key={p.id} href={`#/${p.id}`} aria-current={p.id === current.id ? 'page' : undefined}>{p.label}</a>)}</nav>
      </aside>
      <main className="docs__main">{current.el}</main>
    </div>
  );
}
