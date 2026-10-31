import React from 'react';
import { FeedScreen } from './PostViewer';
import { ProfileScreen } from './Profile';
import { POSTS, PostSlide, type Post } from './posts';

const phone: React.CSSProperties = { width: 390, height: 844, borderRadius: 48, background: '#fff', overflow: 'hidden', position: 'relative', boxShadow: '0 0 0 10px #141414, 0 30px 80px rgba(36,24,87,.25)', display: 'flex', flexDirection: 'column', fontFamily: 'var(--font-body)', color: '#000', flex: 'none' };
const status: React.CSSProperties = { height: 44, flex: 'none', display: 'flex', alignItems: 'center', padding: '0 30px', fontWeight: 700, fontSize: 15 };
const FEATURED = ['rabbia', 'appuntamento', 'arca', 'frasi-chimica'];

export function InstagramKit() {
  const [post, setPost] = React.useState<Post | null>(null);
  return (
    <>
      <h1 className="docs__h1">Instagram — profilo psicologia</h1>
      <p className="docs__lead">Profilo serenis.it ricostruito dagli screenshot: griglia 3:4 con badge pin/reel/carosello, feed dei post con carosello swipeable, like e salva. I reel sono placeholder (video non disponibili); le slide dopo la copertina non erano disponibili.</p>
      <div style={{ display: 'flex', gap: 56, alignItems: 'center', justifyContent: 'center', padding: '20px 10px 40px', flexWrap: 'wrap' }}>
        <div style={phone}>
          <div style={status}>10:25</div>
          {post ? <FeedScreen key={post.id} start={post} onBack={() => setPost(null)} /> : <ProfileScreen onOpen={setPost} />}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, auto)', gap: 14 }}>
          {FEATURED.map(id => {
            const p = POSTS.find(x => x.id === id)!;
            return (
              <button key={id} onClick={() => setPost(p)} aria-label={`Apri post ${id}`} style={{ border: 0, padding: 0, cursor: 'pointer', borderRadius: 6, overflow: 'hidden', boxShadow: 'var(--shadow-soft)' }}>
                <PostSlide post={p} scale={0.24} />
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
