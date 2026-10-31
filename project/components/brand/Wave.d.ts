import React from 'react';

/** Wavy edge shape (white or violet) that crops and highlights photos. */
export interface WaveProps {
  color?: 'white' | 'violet' | 'lavender';
  shape?: 'soft' | 'deep';
  /** Flip vertically, for a top edge */
  flip?: boolean;
  height?: number | string;
  style?: React.CSSProperties;
}
export function Wave(props: WaveProps): JSX.Element;
