import React from 'react';

/** Large display headline for social slides. */
export interface StatementProps {
  /** Short uppercase label in a white hand-drawn pill above the headline (e.g. "Ascoltare la rabbia") */
  marker?: React.ReactNode;
  children?: React.ReactNode;
  /** Supporting line in Mona Sans Regular (e.g. "Le abbiamo chieste a voi 💜") */
  sub?: React.ReactNode;
  size?: 'm' | 'l' | 'xl';
  style?: React.CSSProperties;
}
export function Statement(props: StatementProps): JSX.Element;
