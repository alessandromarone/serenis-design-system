import React from 'react';
import { Button, Card, ChoiceOption, Illustration, Logo, SocialSlide, Statement, Tag, TextField, Wave } from '@serenis/design-system';
import { Group, Spec } from '../Spec';

const Row = ({ children, bg }: { children: React.ReactNode; bg?: string }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center', padding: 12, borderRadius: 12, background: bg }}>{children}</div>
);
const Box = ({ bg, children, style }: { bg: string; children: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{ background: bg, borderRadius: 12, padding: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', ...style }}>{children}</div>
);
const Code = ({ children }: { children: string }) => (
  <pre style={{ margin: '12px 0 0', padding: 12, background: 'var(--paper-2)', borderRadius: 8, fontSize: 12, lineHeight: 1.5, overflowX: 'auto' }}><code>{children}</code></pre>
);

function FormsDemo() {
  const [sel, setSel] = React.useState(1);
  const [multi, setMulti] = React.useState([0]);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('giulia@');
  const opts = ['Mi sento spesso in ansia', 'Ho difficoltà a dormire', 'Vorrei capirmi meglio'];
  const emailError = /^\S+@\S+\.\S+$/.test(email) ? undefined : "Controlla l'indirizzo email";
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
      <div role="radiogroup" aria-label="Come ti senti?" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {opts.map((o, i) => <ChoiceOption key={o} label={o} selected={sel === i} onClick={() => setSel(i)} />)}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <TextField label="Come ti chiami?" placeholder="Il tuo nome" value={name} onChange={setName} />
        <TextField label="Email" type="email" value={email} onChange={setEmail} error={emailError} />
        <div style={{ display: 'flex', gap: 8 }}>
          {['Lavoro', 'Famiglia'].map((o, i) => (
            <ChoiceOption key={o} multi label={o} selected={multi.includes(i)}
              onClick={() => setMulti(x => (x.includes(i) ? x.filter(y => y !== i) : [...x, i]))} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Components() {
  return (
    <>
      <h1 className="docs__h1">Componenti</h1>
      <p className="docs__lead">Import da <code>@serenis/design-system</code> più <code>@serenis/design-system/styles.css</code> una volta sola nell’entry dell’app. Tutti i valori sono token CSS: nessuna dipendenza oltre React.</p>

      <Group title="Brand">
        <Spec name="Logo · Illustration · Wave" sub="brand/">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
            <Box bg="#fff" style={{ border: '1px solid var(--line)' }}><Logo color="violet" height={28} /></Box>
            <Box bg="var(--violet-500)"><Logo color="white" height={28} /></Box>
            <Box bg="var(--violet-100)"><Logo color="violet" vertical="psicologia" layout="compact" height={26} /></Box>
            <Box bg="var(--violet-500)"><Logo color="white" vertical="psicologia" height={22} /></Box>
            <Box bg="#fff" style={{ border: '1px solid var(--line)' }}><Logo color="black" variant="payoff" height={40} /></Box>
            <Box bg="var(--violet-900)"><Logo color="white" variant="mark" height={44} /></Box>
            <Box bg="#fff" style={{ border: '1px solid var(--line)', padding: 8 }}><Illustration name="omino-zoom" height={110} /></Box>
            <Box bg="#fff" style={{ border: '1px solid var(--line)', padding: 8 }}><Illustration name="mano-17" height={110} /></Box>
            <div style={{ borderRadius: 12, overflow: 'hidden', position: 'relative', background: 'var(--violet-300)', height: 126 }}>
              <Wave color="white" height={50} style={{ position: 'absolute', bottom: 0 }} />
              <Wave color="violet" flip height={40} style={{ position: 'absolute', top: 0 }} />
            </div>
          </div>
          <Code>{`<Logo color="white" vertical="psicologia" height={22} />
<Illustration name="omino-zoom" height={110} />
<Wave color="violet" flip height={40} />`}</Code>
        </Spec>
      </Group>

      <Group title="Core">
        <Spec name="Button · Tag · Card" sub="core/ — pill buttons in five variants, three sizes">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Row>
              <Button>Inizia il questionario</Button>
              <Button variant="secondary">Scopri di più</Button>
              <Button variant="outline">Come funziona</Button>
              <Button variant="ghost" size="s">Salta</Button>
              <Button size="s" disabled>Disabilitato</Button>
            </Row>
            <Row bg="var(--violet-500)">
              <Button variant="inverse" iconRight="→">Trova il tuo terapeuta</Button>
              <Tag tone="white">1° colloquio gratuito</Tag>
              <Tag tone="dark">Online</Tag>
            </Row>
            <Row>
              <Tag>Ansia</Tag><Tag>Relazioni</Tag><Tag tone="brand">Psicologia</Tag><Tag tone="outline">Autostima</Tag><Tag size="s">Nuovo</Tag>
              <Button size="l">Prenota</Button>
            </Row>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
              <Card eyebrow="Passo 1" title="Compili il questionario" padding={18}>Pochi minuti.</Card>
              <Card tone="tint" eyebrow="Passo 2" title="Ti abbiniamo" padding={18}>Al professionista giusto.</Card>
              <Card tone="brand" eyebrow="Passo 3" title="Inizia il percorso" padding={18}>Online, quando vuoi.</Card>
            </div>
          </div>
          <Code>{`<Button variant="inverse" iconRight="→">Trova il tuo terapeuta</Button>
<Tag tone="white">1° colloquio gratuito</Tag>
<Card tone="tint" eyebrow="Passo 2" title="Ti abbiniamo">Al professionista giusto.</Card>`}</Code>
        </Spec>
      </Group>

      <Group title="Forms">
        <Spec name="ChoiceOption · TextField" sub="forms/ — entry questionnaire">
          <FormsDemo />
          <Code>{`<ChoiceOption label="Ho difficoltà a dormire" selected={sel === 1} onClick={() => setSel(1)} />
<ChoiceOption multi label="Lavoro" selected />
<TextField label="Email" type="email" value={email} onChange={setEmail} error={err} />`}</Code>
        </Spec>
      </Group>

      <Group title="Social">
        <Spec name="SocialSlide · Statement" sub="social/ — 1080×1350 canvas scaled with `scale`">
          <div style={{ display: 'flex', gap: 10, overflowX: 'auto' }}>
            <SocialSlide tone="dark" scale={0.29}><Statement marker="Ascoltare la rabbia" style={{ marginTop: 120 }}>significa riconoscere che dietro una vetrina rotta può nascondersi un disagio che è stato ignorato.</Statement></SocialSlide>
            <SocialSlide tone="lilac" scale={0.29}><Statement sub="Le abbiamo chieste a voi 💜">Frasi della mia terapeuta che hanno alterato la chimica del mio cervello:</Statement></SocialSlide>
            <SocialSlide tone="tint" align="center" scale={0.29}><Statement size="xl" sub="(Per rendere speciale la routine)" style={{ marginTop: 160 }}>35 idee di appuntamento che non sono una cena fuori 💜</Statement></SocialSlide>
          </div>
          <Code>{`<SocialSlide tone="lilac" scale={0.29}>
  <Statement sub="Le abbiamo chieste a voi 💜">Frasi della mia terapeuta…</Statement>
</SocialSlide>`}</Code>
        </Spec>
        <Spec name="Slide tones & formats" sub="white · tint · lilac · violet · dark — portrait, square, story">
          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', overflowX: 'auto' }}>
            {(['white', 'tint', 'lilac', 'violet', 'dark'] as const).map(t => (
              <div key={t} style={{ border: t === 'white' ? '1px solid var(--line)' : undefined }}>
                <SocialSlide tone={t} scale={0.115}><Statement size="m">Come stai, davvero?</Statement></SocialSlide>
              </div>
            ))}
            <div style={{ border: '1px solid var(--line)' }}><SocialSlide format="square" scale={0.115}><Statement size="m">1:1</Statement></SocialSlide></div>
            <SocialSlide tone="violet" format="story" scale={0.081}><Statement size="m">Story 9:16</Statement></SocialSlide>
          </div>
        </Spec>
      </Group>
    </>
  );
}
