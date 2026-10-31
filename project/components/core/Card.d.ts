import React from 'react';

/** Rounded content block: white, lavender tint, violet or dark violet. */
export interface CardProps {
  tone?: 'white' | 'tint' | 'brand' | 'dark';
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** Image/illustration placed above the text */
  media?: React.ReactNode;
  padding?: number;
  radius?: number | string;
  /** Soft violet-tinted shadow (otherwise flat) */
  elevated?: boolean;
  style?: React.CSSProperties;
}
export function Card(props: CardProps): JSX.Element;
