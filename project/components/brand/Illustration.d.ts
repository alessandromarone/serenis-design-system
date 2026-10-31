import React from 'react';

/** One of the official Serenis illustrations: Mino ("omino") or the hands. */
export interface IllustrationProps {
  name?: 'omino-zoom' | 'omino-zoom-1' | 'omino-1' | 'omino-2' | 'omino-annoiato' | 'omino-appoggiato' | 'omino-appoggiato-2' | 'omino-cade' | 'omino-caffe' | 'omino-cucu' | 'omino-centro' | 'omino-bici' | 'livello-1-10' | 'batti-8' | 'batti-pasta' | 'mani-e-piedi' | 'mano-16' | 'mano-17' | 'mano-18' | 'mano-19' | 'mano-20' | 'mano-21' | 'mano-22' | 'mano-23' | 'mano-alt' | 'mano-alt-1' | 'mano-alt-2' | 'mano-gratis' | 'mano-sconto';
  width?: number | string;
  height?: number | string;
  fit?: 'contain' | 'cover';
  /** Path to assets/illustrations/ relative to the page */
  base?: string;
  alt?: string;
  style?: React.CSSProperties;
}
export function Illustration(props: IllustrationProps): JSX.Element;
