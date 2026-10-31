import { Illustration, Logo, type IllustrationName } from '@serenis/design-system';
import { Ic, type IconName } from './icons';
import { POSTS, PostSlide, ReelFrame, slideCount, type Post } from './posts';

export const Verified = ({ s = 16 }: { s?: number }) => (
  <span style={{ width: s, height: s, borderRadius: '50%', background: '#2F8CF0', color: '#fff', fontSize: s * 0.62, fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>✓</span>
);

export const Avatar = ({ s = 40, ring = true }: { s?: number; ring?: boolean }) => (
  <div style={{ width: s, height: s, borderRadius: '50%', padding: ring ? s * 0.06 : 0, border: ring ? `${Math.max(2, s * 0.035)}px solid var(--violet-500)` : 0, boxSizing: 'border-box', flex: 'none' }}>
    <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'var(--violet-500)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Logo variant="mark" color="white" height={s * 0.42} />
    </div>
  </div>
);

const HIGHLIGHTS: [string, IllustrationName, string][] = [
  ['Chi siamo', 'mano-16', 'var(--violet-500)'], ['Come funziona', 'mano-alt', 'var(--navy)'], ['Agevolazioni', 'mano-sconto', 'var(--violet-500)'],
  ['Test gratis', 'mano-gratis', 'var(--navy)'], ['Consiglia', 'batti-8', 'var(--violet-500)'],
];
const BLUE = '#3B56C4';

function ProfileHeader() {
  return (
    <div style={{ padding: '4px 14px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <Avatar s={88} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ fontWeight: 700, fontSize: 14 }}>Serenis</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, lineHeight: 1.15 }}>
            {[['1837', 'post'], ['646 mila', 'follower'], ['213', 'seguiti']].map(([n, l]) => <div key={l}><div style={{ fontWeight: 700, fontSize: 16 }}>{n}</div>{l}</div>)}
          </div>
        </div>
      </div>
      <div style={{ fontSize: 13, lineHeight: 1.4 }}>
        <div style={{ color: '#737373' }}>Centro medico</div>
        <div>🏥 Centro medico online. Per le persone e per le aziende.</div>
        <div>💜 Seguici su <span style={{ color: BLUE }}>@serenis.nutrizione</span> e <span style={{ color: BLUE }}>@serenis.adhd</span></div>
        <div>👇 Inizia da qui</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: BLUE, fontWeight: 700, marginTop: 2 }}><Ic n="link" s={14} color={BLUE} />linktr.ee/serenis</div>
      </div>
      <div style={{ display: 'flex', gap: 6 }}>
        {[['Segui', '#4A5DF9', '#fff'], ['Messaggio', '#EFEFF2', '#000']].map(([l, bg, fg]) => (
          <button key={l} style={{ flex: 1, height: 32, border: 0, borderRadius: 8, background: bg, color: fg, fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>{l}</button>
        ))}
        <button aria-label="Suggeriti" style={{ width: 34, height: 32, border: 0, borderRadius: 8, background: '#EFEFF2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Ic n="user-plus" s={16} /></button>
      </div>
      <div className="noscroll" style={{ display: 'flex', gap: 14, overflowX: 'auto', padding: '6px 0 10px' }}>
        {HIGHLIGHTS.map(([l, ill, bg]) => (
          <div key={l} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, flex: 'none', width: 66 }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', border: '1.5px solid #DBDBDB', padding: 3, boxSizing: 'border-box' }}>
              <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <Illustration name={ill} width={44} height={44} />
              </div>
            </div>
            <span style={{ fontSize: 11, whiteSpace: 'nowrap' }}>{l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function GridTile({ post, onOpen }: { post: Post; onOpen: (p: Post) => void }) {
  const w = (390 - 4) / 3, h = (w * 4) / 3;
  const sc = h / 1350, sw = 1080 * sc;
  const badge: IconName | null = post.pinned ? 'pin' : post.kind === 'reel' ? 'play' : slideCount(post) > 1 ? 'copy' : null;
  return (
    <button onClick={() => onOpen(post)} aria-label={`Apri post ${post.id}`} style={{ border: 0, padding: 0, cursor: 'pointer', position: 'relative', width: '100%', height: h, overflow: 'hidden', background: '#eee' }}>
      {post.kind === 'reel' ? <ReelFrame post={post} w={w} h={h} /> : <div style={{ marginLeft: (w - sw) / 2 }}><PostSlide post={post} scale={sc} /></div>}
      {badge && <span style={{ position: 'absolute', top: 7, right: 7, filter: 'drop-shadow(0 0 1px rgba(0,0,0,.6))' }}><Ic n={badge} s={16} color="#fff" /></span>}
    </button>
  );
}

export function ProfileScreen({ onOpen }: { onOpen: (p: Post) => void }) {
  return (
    <>
      <div style={{ height: 44, flex: 'none', display: 'flex', alignItems: 'center', gap: 14, padding: '0 14px' }}>
        <Ic n="chevron-left" s={26} />
        <span style={{ fontWeight: 700, fontSize: 19, display: 'flex', alignItems: 'center', gap: 5 }}>serenis.it <Verified /></span>
        <Ic n="ellipsis" s={22} style={{ marginLeft: 'auto' }} />
      </div>
      <div className="noscroll" style={{ overflowY: 'auto', flex: 1 }}>
        <ProfileHeader />
        <div style={{ display: 'flex' }}>
          {(['grid-3x3', 'square-play', 'repeat-2', 'square-user'] as IconName[]).map((n, i) => (
            <div key={n} style={{ flex: 1, display: 'flex', justifyContent: 'center', padding: '10px 0', borderBottom: i === 0 ? '1.5px solid #000' : '1px solid #DBDBDB', opacity: i === 0 ? 1 : 0.45 }}><Ic n={n} s={22} /></div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 2 }}>
          {POSTS.map(p => <GridTile key={p.id} post={p} onOpen={onOpen} />)}
        </div>
      </div>
    </>
  );
}
