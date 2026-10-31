import { DRAFT_ILLUSTRATIONS, Illustration, Logo, OPAQUE_ILLUSTRATIONS, Wave, type DraftIllustrationName, type IllustrationName } from '@serenis/design-system';
import { Group, Spec } from '../Spec';

const MINO_1: IllustrationName[] = ['omino-zoom', 'omino-zoom-1', 'omino-annoiato', 'omino-appoggiato', 'omino-appoggiato-2', 'omino-cade'];
const MINO_2: IllustrationName[] = ['omino-caffe', 'omino-cucu', 'omino-centro', 'omino-bici', 'omino-1', 'omino-2', 'livello-1-10'];
const HANDS_1: IllustrationName[] = ['mano-16', 'mano-17', 'mano-18', 'mano-19', 'mano-20', 'mano-21', 'mano-22', 'mano-23'];
const HANDS_2: IllustrationName[] = ['batti-8', 'batti-pasta', 'mani-e-piedi', 'mano-gratis', 'mano-sconto', 'mano-alt', 'mano-alt-1', 'mano-alt-2'];

function IlluGrid({ names, cols }: { names: (IllustrationName | DraftIllustrationName)[]; cols: number }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))`, gap: 8 }}>
      {names.map(n => (
        <div key={n} style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 10, padding: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <Illustration name={n} height={120} style={{ maxWidth: '100%' }} alt={n} />
          <span className="v">{n}{OPAQUE_ILLUSTRATIONS.includes(n as IllustrationName) ? ' · opaco' : ''}</span>
        </div>
      ))}
    </div>
  );
}

export function Brand() {
  return (
    <>
      <h1 className="docs__h1">Brand</h1>
      <p className="docs__lead">Pittogramma morbido (il percorso verso il benessere) + scritta squadrata (la parte tecnologica). Il logo si usa solo nelle combinazioni di colore qui sotto.</p>

      <Group title="Logo">
        <Spec name="Logo — allowed colours" sub="Violet on white, white on violet, black on white, white on dark">
          <div className="row">
            <div className="tile tile--line"><Logo color="violet" height={30} /></div>
            <div className="tile" style={{ background: 'var(--violet-500)' }}><Logo color="white" height={30} /></div>
            <div className="tile tile--line"><Logo color="black" height={30} /></div>
            <div className="tile" style={{ background: 'var(--violet-900)' }}><Logo color="white" height={30} /></div>
          </div>
        </Spec>
        <Spec name="Pittogramma" sub="Soft symbol of the path to wellbeing — avatar, favicon, watermark">
          <div className="row">
            <div className="tile tile--line"><Logo variant="mark" color="violet" height={64} /></div>
            <div className="tile" style={{ background: 'var(--violet-500)' }}><Logo variant="mark" color="white" height={64} /></div>
            <div className="tile tile--line"><Logo variant="mark" color="black" height={64} /></div>
            <div className="tile"><div style={{ width: 96, height: 96, borderRadius: '50%', background: 'var(--violet-500)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Logo variant="mark" color="white" height={46} /></div></div>
          </div>
        </Spec>
        <Spec name="Logo with payoff" sub="Payoff lockup — default, black, white">
          <div className="row">
            <div className="tile tile--line"><Logo variant="payoff" color="violet" height={46} /></div>
            <div className="tile tile--line"><Logo variant="payoff" color="black" height={46} /></div>
            <div className="tile" style={{ background: 'var(--violet-500)' }}><Logo variant="payoff" color="white" height={46} /></div>
          </div>
        </Spec>
        <Spec name="Secondary logos" sub="Logo + vertical name — extended (horizontal) and compact (vertical). Reconstructed: replace with official files">
          <div className="row">
            <div className="tile tile--line" style={{ height: 130 }}><Logo color="violet" vertical="psicologia" height={24} /></div>
            <div className="tile" style={{ height: 130, background: 'var(--violet-500)' }}><Logo color="white" vertical="psicologia" height={24} /></div>
            <div className="tile tile--line" style={{ height: 130 }}><Logo color="violet" vertical="psicologia" layout="compact" height={28} /></div>
            <div className="tile" style={{ height: 130, background: 'var(--violet-500)' }}><Logo color="white" vertical="psicologia" layout="compact" height={28} /></div>
          </div>
        </Spec>
      </Group>

      <Group title="Illustrazioni">
        <Spec name="Mino — moods" sub="Mino (“omino”): neither male nor female; line violet on lavender blob"><IlluGrid names={MINO_1} cols={6} /></Spec>
        <Spec name="Mino — scenes" sub="Everyday scenes; omino-centro and omino-bici are vector"><IlluGrid names={MINO_2} cols={7} /></Spec>
        <Spec name="Hands — gestures" sub="Hands carry trust and human presence"><IlluGrid names={HANDS_1} cols={8} /></Spec>
        <Spec name="Hands — actions" sub="High-five, counting, giving, offers (gratis, sconto)"><IlluGrid names={HANDS_2} cols={8} /></Spec>
        <Spec name="Regola sui PNG opachi" sub="I Mino marcati “opaco” hanno il fondo bianco incorporato">
          <div className="row">
            <div className="tile tile--line" style={{ height: 150 }}><Illustration name="omino-zoom" height={130} /></div>
            <div className="tile" style={{ height: 150, background: 'var(--violet-500)' }}>
              <div style={{ width: 130, height: 130, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}><Illustration name="omino-zoom" height={110} /></div>
            </div>
            <div className="tile" style={{ height: 150, background: 'var(--violet-500)' }}><Illustration name="mano-17" height={130} /></div>
          </div>
          <div className="v" style={{ marginTop: 8 }}>Su bianco · dentro un cerchio bianco su fondi colorati · le mani (trasparenti) vanno ovunque</div>
        </Spec>
      </Group>

      <Group title="Bozze — Cena di classe">
        <div className="warn"><b>Non ufficiali.</b> Mino a tavola e la linea arcuata della Fase 6 sono state disegnate in Claude Design imitando lo stile di Mino. Vanno fatte ridisegnare all’illustratore prima della pubblicazione. Sono esportate in PNG trasparente e in SVG.</div>
        <Spec name="Draft illustrations" sub={`DRAFT_ILLUSTRATIONS · ${Object.keys(DRAFT_ILLUSTRATIONS).join(' · ')}`}>
          <IlluGrid names={Object.keys(DRAFT_ILLUSTRATIONS) as DraftIllustrationName[]} cols={3} />
        </Spec>
      </Group>

      <Group title="Forme ondulate">
        <Spec name="Wave" sub="White/violet undulating edges that soften photos. Approximation — replace with the official shape" flush>
          <div style={{ position: 'relative', background: 'var(--violet-300)', height: 160 }}>
            <Wave color="violet" flip height={46} style={{ position: 'absolute', top: 0 }} />
            <Wave color="white" shape="deep" height={60} style={{ position: 'absolute', bottom: 0 }} />
          </div>
        </Spec>
      </Group>
    </>
  );
}
