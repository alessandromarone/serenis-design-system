import React from 'react';

const PATHS = {
  soft: 'M0 60 C 150 10, 300 110, 450 60 S 750 10, 900 60 S 1200 110, 1200 60 V 120 H 0 Z',
  deep: 'M0 70 C 200 -10, 400 150, 600 70 S 1000 -10, 1200 70 V 120 H 0 Z',
};

/** Undulating edge used to frame/crop photos. Approximation — replace with the official shape file when available. */
export function Wave({ color = 'white', shape = 'soft', flip = false, height = 80, style }) {
  const fill = color === 'violet' ? 'var(--violet-500)' : color === 'lavender' ? 'var(--violet-100)' : '#fff';
  return (
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true"
      style={{ display: 'block', width: '100%', height, transform: flip ? 'scaleY(-1)' : undefined, ...style }}>
      <path d={PATHS[shape]} fill={fill} />
    </svg>
  );
}
