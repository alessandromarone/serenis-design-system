import React from 'react';
import { Ic } from './icons';
import { Avatar, Verified } from './Profile';
import { POSTS, PostSlide, ReelFrame, slideCount, type Post } from './posts';

const navBtn = (side: 'left' | 'right'): React.CSSProperties => ({ position: 'absolute', top: '50%', [side]: 8, transform: 'translateY(-50%)', width: 26, height: 26, borderRadius: '50%', border: 0, background: 'rgba(255,255,255,.85)', color: '#000', fontSize: 18, lineHeight: '24px', cursor: 'pointer', padding: 0 });
const actBtn: React.CSSProperties = { border: 0, background: 'none', padding: 0, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 700, color: '#000', fontFamily: 'inherit' };

function FeedPost({ post }: { post: Post }) {
  const W = 390, H = W * 1.25;
  const n = slideCount(post);
  const [i, setI] = React.useState(0);
  const [liked, setLiked] = React.useState(false);
  const [saved, setSaved] = React.useState(false);
  const x0 = React.useRef<number | null>(null);
  const go = (d: number) => setI(v => Math.max(0, Math.min(n - 1, v + d)));
  const likes = post.likes == null ? '' : post.likes + (liked ? 1 : 0);
  return (
    <div style={{ paddingBottom: 18 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px' }}>
        <Avatar s={40} />
        <div style={{ flex: 1, minWidth: 0, fontSize: 13, lineHeight: 1.3 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontWeight: 700 }}>serenis.it <Verified s={13} />{post.collab && <span>&nbsp;e {post.collab}</span>}</div>
          {post.music && <div style={{ display: 'flex', alignItems: 'center', gap: 5, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><Ic n="music" s={12} />{post.music}</div>}
        </div>
        <Ic n="menu" s={20} />
      </div>
      <div style={{ position: 'relative', width: W, height: H, overflow: 'hidden', touchAction: 'pan-y', userSelect: 'none' }}
        onPointerDown={e => (x0.current = e.clientX)}
        onPointerUp={e => { if (x0.current == null) return; const dx = e.clientX - x0.current; if (Math.abs(dx) > 30) go(dx < 0 ? 1 : -1); x0.current = null; }}
        onDoubleClick={() => setLiked(true)}>
        {post.kind === 'reel' ? <ReelFrame post={post} w={W} h={H} /> : (
          <div style={{ display: 'flex', transform: `translateX(${-i * W}px)`, transition: 'transform var(--dur-slow) var(--ease-soft)' }}>
            {Array.from({ length: n }, (_, k) => <PostSlide key={k} post={post} i={k} scale={W / 1080} />)}
          </div>
        )}
        {n > 1 && <span style={{ position: 'absolute', top: 14, right: 14, background: 'rgba(20,20,20,.7)', color: '#fff', fontSize: 12, fontWeight: 700, padding: '4px 9px', borderRadius: 14 }}>{i + 1}/{n}</span>}
        {post.music && <span style={{ position: 'absolute', right: 14, bottom: 14, width: 28, height: 28, borderRadius: '50%', background: 'rgba(20,20,20,.55)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Ic n="volume-2" s={14} color="#fff" /></span>}
        {i > 0 && <button aria-label="Slide precedente" onClick={() => go(-1)} style={navBtn('left')}>‹</button>}
        {i < n - 1 && <button aria-label="Slide successiva" onClick={() => go(1)} style={navBtn('right')}>›</button>}
      </div>
      {n > 1 && <div style={{ display: 'flex', justifyContent: 'center', gap: 4, paddingTop: 10 }}>{Array.from({ length: Math.min(n, 5) }, (_, k) => <span key={k} style={{ width: 6, height: 6, borderRadius: 3, background: k === Math.min(i, 4) ? '#4A5DF9' : '#DBDBDB' }} />)}</div>}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '10px 14px 6px', fontSize: 14, fontWeight: 700 }}>
        <button onClick={() => setLiked(l => !l)} aria-pressed={liked} aria-label="Mi piace" style={actBtn}>{liked ? <span style={{ color: '#FF3040', fontSize: 25, lineHeight: '24px' }}>♥</span> : <Ic n="heart" />}{likes}</button>
        <span style={actBtn}><Ic n="message-circle" />{post.comments}</span>
        <span style={actBtn}><Ic n="repeat-2" />{post.reposts}</span>
        <span style={actBtn}><Ic n="send" />{post.shares}</span>
        <button onClick={() => setSaved(s => !s)} aria-pressed={saved} aria-label="Salva" style={{ ...actBtn, marginLeft: 'auto', opacity: saved ? 1 : 0.9 }}><Ic n="bookmark" />{saved && <span style={{ fontSize: 11 }}>Salvato</span>}</button>
      </div>
      {post.caption && <div style={{ padding: '2px 14px', fontSize: 13, lineHeight: 1.4 }}><b>serenis.it</b> {post.caption} <span style={{ color: '#737373' }}>altro</span></div>}
      {post.date && <div style={{ padding: '4px 14px', fontSize: 11, color: '#737373' }}>{post.date}</div>}
    </div>
  );
}

export function FeedScreen({ start, onBack }: { start: Post; onBack: () => void }) {
  const idx = Math.max(0, POSTS.findIndex(p => p.id === start.id));
  return (
    <>
      <div style={{ height: 56, flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 12px' }}>
        <button onClick={onBack} aria-label="Indietro" style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid #DBDBDB', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }}><Ic n="chevron-left" s={22} /></button>
        <div style={{ textAlign: 'center', lineHeight: 1.2 }}><div style={{ fontWeight: 700, fontSize: 15 }}>Post</div><div style={{ fontSize: 12 }}>serenis.it</div></div>
        <button style={{ height: 40, padding: '0 18px', borderRadius: 20, border: '1px solid #DBDBDB', background: '#fff', fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>Segui</button>
      </div>
      <div className="noscroll" style={{ overflowY: 'auto', flex: 1 }}>{POSTS.slice(idx).map(p => <FeedPost key={p.id} post={p} />)}</div>
    </>
  );
}
