import React from 'react';
import { DRAFT_ILLUSTRATIONS, ILLUSTRATIONS, type DraftIllustrationName, type IllustrationName } from '../../assets';
import { cx } from '../../utils';

/**
 * Mino PNGs with an opaque white background: place them only on white,
 * or inside a white circle / rounded block on coloured grounds.
 */
export const OPAQUE_ILLUSTRATIONS: readonly IllustrationName[] = [
  'omino-1', 'omino-2', 'omino-annoiato', 'omino-appoggiato', 'omino-appoggiato-2', 'omino-cade', 'omino-cucu', 'omino-zoom', 'omino-zoom-1',
];

const ALL: Record<string, string> = { ...ILLUSTRATIONS, ...DRAFT_ILLUSTRATIONS };
const FILE_EXT: Record<string, string> = { 'omino-centro': 'svg', 'omino-bici': 'svg' };

/** One of the official Serenis illustrations: Mino ("omino") or the hands. Never recolour, never redraw. */
export interface IllustrationProps {
  /** Official name, or a draft (`mino-a-tavola*`, `linea-arcuata-fase6`) — drafts are not final artwork */
  name?: IllustrationName | DraftIllustrationName;
  width?: number | string;
  height?: number | string;
  fit?: 'contain' | 'cover';
  /** Optional folder URL that overrides the bundled files (must end with "/") */
  base?: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function Illustration({ name = 'omino-zoom', width, height, fit = 'contain', base, alt = '', className, style }: IllustrationProps) {
  const src = base != null ? `${base}${name}.${FILE_EXT[name] ?? 'png'}` : ALL[name];
  return <img src={src} alt={alt} className={cx('srn-illu', className)} style={{ width, height, objectFit: fit, ...style }} />;
}
