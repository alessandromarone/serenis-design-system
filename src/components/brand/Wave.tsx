import React from 'react';
import { cx } from '../../utils';

const PATHS = {
  soft: 'M0 60 C 150 10, 300 110, 450 60 S 750 10, 900 60 S 1200 110, 1200 60 V 120 H 0 Z',
  deep: 'M0 70 C 200 -10, 400 150, 600 70 S 1000 -10, 1200 70 V 120 H 0 Z',
} as const;
const FILL = { white: '#fff', violet: 'var(--violet-500)', lavender: 'var(--violet-100)' } as const;

/** Wavy edge (white or violet) that crops and highlights photos. Approximation — replace with the official shape file when available. */
export interface WaveProps {
  color?: keyof typeof FILL;
  shape?: keyof typeof PATHS;
  /** Flip vertically, for a top edge */
  flip?: boolean;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

export function Wave({ color = 'white', shape = 'soft', flip = false, height = 80, className, style }: WaveProps) {
  return (
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true" className={cx('srn-wave', className)}
      style={{ height, transform: flip ? 'scaleY(-1)' : undefined, ...style }}>
      <path d={PATHS[shape]} fill={FILL[color]} />
    </svg>
  );
}
