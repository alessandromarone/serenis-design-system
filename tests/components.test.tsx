import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

afterEach(cleanup);
import {
  Button, Card, ChoiceOption, DRAFT_ILLUSTRATIONS, ILLUSTRATIONS, Illustration, Logo, SocialSlide, Statement, Tag, TextField,
} from '../src';

describe('Button', () => {
  it('defaults to primary/m, type=button, renders trailing icon', () => {
    render(<Button iconRight="→">Inizia</Button>);
    const b = screen.getByRole('button', { name: /Inizia/ });
    expect(b.dataset.variant).toBe('primary');
    expect(b.dataset.size).toBe('m');
    expect(b.getAttribute('type')).toBe('button');
    expect(b.textContent).toBe('Inizia→');
  });
  it('does not fire when disabled', () => {
    const fn = vi.fn();
    render(<Button disabled onClick={fn}>No</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(fn).not.toHaveBeenCalled();
  });
});

describe('ChoiceOption', () => {
  it('exposes radio / checkbox semantics', () => {
    render(<><ChoiceOption label="A" selected /><ChoiceOption multi label="B" /></>);
    expect(screen.getByRole('radio', { name: 'A' }).getAttribute('aria-checked')).toBe('true');
    expect(screen.getByRole('checkbox', { name: 'B' }).getAttribute('aria-checked')).toBe('false');
  });
});

describe('TextField', () => {
  it('links label, reports value and shows error', () => {
    const fn = vi.fn();
    render(<TextField label="Email" value="" onChange={fn} error="Controlla l'indirizzo email" />);
    const input = screen.getByLabelText('Email');
    fireEvent.change(input, { target: { value: 'a@b.it' } });
    expect(fn).toHaveBeenCalledWith('a@b.it');
    expect(input.getAttribute('aria-invalid')).toBe('true');
    expect(screen.getByText("Controlla l'indirizzo email").id).toBe(input.getAttribute('aria-describedby'));
  });
});

describe('Logo', () => {
  it('uses the bundled svg, or base override', () => {
    const { container, rerender } = render(<Logo color="white" />);
    expect(container.querySelector('img')!.getAttribute('src')).toMatch(/serenis-logo-white\.svg$/);
    rerender(<Logo variant="mark" color="violet" base="https://cdn.example/logo/" />);
    expect(container.querySelector('img')!.getAttribute('src')).toBe('https://cdn.example/logo/serenis-pittogramma-default.svg');
  });
  it('renders the secondary lockup with the vertical name', () => {
    render(<Logo vertical="psicologia" layout="compact" height={28} />);
    expect(screen.getByText('psicologia').style.fontSize).toBe(`${28 * 0.62}px`);
  });
});

describe('Illustration', () => {
  it('covers all official and draft files', () => {
    expect(Object.keys(ILLUSTRATIONS)).toHaveLength(29);
    expect(Object.keys(DRAFT_ILLUSTRATIONS)).toEqual(['mino-a-tavola', 'mino-a-tavola-senza-pallina', 'linea-arcuata-fase6']);
    const { container, rerender } = render(<Illustration name="omino-centro" />);
    expect(container.querySelector('img')!.getAttribute('src')).toMatch(/omino-centro\.svg$/);
    rerender(<Illustration name="mano-17" base="/x/" />);
    expect(container.querySelector('img')!.getAttribute('src')).toBe('/x/mano-17.png');
  });
});

describe('SocialSlide', () => {
  it('sizes the outer box by scale and picks the logo for the tone', () => {
    const { container } = render(<SocialSlide tone="dark" scale={0.5}><Statement sub="sub">Titolo</Statement></SocialSlide>);
    const outer = container.firstElementChild as HTMLElement;
    expect(outer.style.width).toBe('540px');
    expect(outer.style.height).toBe('675px');
    expect(container.querySelector('img')!.getAttribute('src')).toMatch(/serenis-logo-white\.svg$/);
  });
  it('story format is 1920 high; light tones use the black logo', () => {
    const { container } = render(<SocialSlide tone="lilac" format="story" />);
    expect((container.firstElementChild as HTMLElement).style.height).toBe('1920px');
    expect(container.querySelector('img')!.getAttribute('src')).toMatch(/serenis-logo-black\.svg$/);
  });
});

describe('Tag / Card', () => {
  it('apply tone attributes and optional slots', () => {
    render(<><Tag tone="outline">Autostima</Tag><Card tone="tint" eyebrow="Passo 2" title="Ti abbiniamo" elevated>Testo</Card></>);
    expect(screen.getByText('Autostima').dataset.tone).toBe('outline');
    const card = screen.getByText('Ti abbiniamo').closest('.srn-card') as HTMLElement;
    expect(card.dataset.tone).toBe('tint');
    expect(card.hasAttribute('data-elevated')).toBe(true);
  });
});
