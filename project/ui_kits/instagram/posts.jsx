// Posts from the serenis.it profile (copy as seen in the reference screenshots).
const { SocialSlide, Statement, Illustration } = window.SerenisDesignSystem_452571;

const ANSIA_LINE = 'CONTROLLO LE NOTIFICHE PER CALMARE L’ANSIA MA L’ANSIA AUMENTA PERCHÉ ';

const Missing = ({ n, of }) => <div style={{ margin: 'auto', fontSize: 34, opacity: 0.5, textAlign: 'center' }}>Slide {n} di {of}<br />contenuto non disponibile</div>;

const POSTS = [
  { id: 'depressione', kind: 'post', pinned: true, tone: 'tint', count: 1, slides: [() => <Statement>Soffrire di depressione non significa solamente stare tutto il giorno al buio a piangere.<br /><br />La depressione può avere molte facce:</Statement>] },
  { id: 'routine', kind: 'reel', pinned: true, top: 'Come trasformare la routine in qualcosa di straordinario', bottom: 'la colazione in una degustazione' },
  { id: 'frasi-chimica', kind: 'post', pinned: true, tone: 'lilac', slides: [() => <Statement sub="Le abbiamo chieste a voi 💜">Frasi della mia terapeuta che hanno alterato la chimica del mio cervello:</Statement>] },
  { id: 'carico', kind: 'reel', dark: true, top: 'Questa scena di "Ti lascio, ti odio, ti..." ci spiega il peso del carico mentale quando in una coppia la fatica non condivisa si trasforma in rabbia e stanchezza emotiva.', bottom: '- Ho passato mezza giornata' },
  { id: 'frasi-buio', kind: 'post', tone: 'white', count: 3, slides: [() => <Statement sub="Le abbiamo chieste a voi 🫂">Frasi della mia terapeuta che mi hanno acceso il cervello dopo mesi di buio:</Statement>] },
  { id: 'notifiche', kind: 'post', tone: 'violet', count: 2, slides: [() => <div style={{ marginTop: -20, fontWeight: 700, fontSize: 19.5, lineHeight: 1.12, letterSpacing: '0.01em', textAlign: 'justify', textAlignLast: 'justify' }}>{Array.from({ length: 34 }, (_, i) => <div key={i}>{ANSIA_LINE + ANSIA_LINE.split(' ').slice(0, 2).join(' ')}</div>)}</div>] },
  { id: 'ansia-donne', kind: 'post', tone: 'white', count: 6, slides: [() => <Statement>L’ansia non si presenta sempre con gli attacchi di panico.<br /><br />Nelle donne si manifesta spesso attraverso segnali silenziosi che finiamo per scambiare per semplice stanchezza:</Statement>] },
  { id: 'fuori-posto', kind: 'reel', top: 'Risposte per chi si sente fuori posto, come una scatoletta di tonno tra le marmellate 💜' },
  { id: 'rabbia', kind: 'post', tone: 'dark', count: 8, music: 'Michael Jackson · They Don’t Care About Us (Remastered Ver…', likes: 1130, comments: 228, reposts: 108, shares: 156, date: '5 giorni fa',
    caption: 'Negli ultimi giorni le proteste hanno riempito le città e le autostrade, sfociando in alcuni casi in episodi di violenza e vandalismo…',
    slides: [() => <Statement marker="Ascoltare la rabbia" style={{ marginTop: 160 }}>significa riconoscere<br />che dietro una<br />vetrina rotta può<br />nascondersi<br />un disagio che<br />è stato ignorato.</Statement>] },
  { id: 'appuntamento', kind: 'post', tone: 'tint', align: 'center', count: 5, music: 'Glorify, ChillØut · Lovely Moment', likes: 3750, comments: 19, reposts: 51, shares: 2133, date: '5 giorni fa',
    caption: 'Cercare nuove idee appuntamento diverse dalla solita cena al ristorante aiuta a spezzare la monotonia e a ritrovare entusiasmo 💜…',
    slides: [() => <Statement size="xl" sub="(Per rendere speciale la routine)" style={{ marginTop: 160 }}>35 idee di appuntamento che non sono una cena fuori 💜</Statement>] },
  { id: 'anno-terapia', kind: 'reel', top: '5 cose che puoi imparare in un anno di terapia', bottom: '5' },
  { id: 'arca', kind: 'post', tone: 'white', align: 'center', count: 5, collab: 'progettoarca', music: 'Helder Boutens · the kindness in her eyes', likes: 4832, comments: 44, reposts: 244, shares: 168, date: '17 ottobre',
    caption: 'Prima di giudicare la lentezza di qualcuno in coda, un’esitazione, una strada sbagliata o una scelta che non capiamo, bisognerebbe chiedersi quale storia c’è dietro 🫂…',
    slides: [() => <><Statement size="m">Quella persona che rifiuta l'invito ad andare in una struttura per la notte…</Statement><Illustration name="omino-centro" width={760} style={{ margin: '40px auto' }} /><Statement size="m">forse non vuole abbandonare il suo cane, che è l’unica famiglia che gli è rimasta.</Statement></>] },
];

function PostSlide({ post, i = 0, scale = 0.3 }) {
  const n = post.count || post.slides.length;
  const render = post.slides[i];
  return (
    <SocialSlide tone={post.tone} align={post.align} scale={scale}>
      {render ? render() : <Missing n={i + 1} of={n} />}
    </SocialSlide>
  );
}

// Reels: video frame not available — dark field + on-screen caption styling.
function ReelFrame({ post, w, h }) {
  const s = w / 390;
  const cap = { fontFamily: 'var(--font-body)', fontWeight: 700, fontStyle: 'italic', color: 'var(--violet-400)', textAlign: 'center', lineHeight: 1.15, textShadow: '0 0 1px #fff,0 0 1px #fff,0 0 2px #fff' };
  return (
    <div style={{ width: w, height: h, background: post.dark ? '#000' : '#3B3848', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', padding: `${14 * s}px ${16 * s}px ${30 * s}px`, boxSizing: 'border-box' }}>
      <div style={{ ...cap, fontSize: (post.dark ? 15 : 19) * s }}>{post.top}</div>
      <div style={{ color: 'rgba(255,255,255,.35)', fontSize: 12 * s, fontFamily: 'var(--font-body)' }}>video</div>
      <div style={{ ...cap, color: '#fff', fontStyle: 'normal', fontWeight: 400, textShadow: 'none', fontSize: 16 * s }}>{post.bottom || ''}</div>
    </div>
  );
}

Object.assign(window, { POSTS, PostSlide, ReelFrame });
