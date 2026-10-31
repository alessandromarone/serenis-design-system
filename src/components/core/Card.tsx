import React from 'react';
import { cx, flag } from '../../utils';

export type CardTone = 'white' | 'tint' | 'brand' | 'dark';

/** Rounded content block: white with hairline, lavender tint, violet or dark violet. Flat unless `elevated`. */
export interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  tone?: CardTone;
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  /** Image/illustration placed above the text */
  media?: React.ReactNode;
  /** Inner padding in px (default 24) */
  padding?: number;
  /** Corner radius (default var(--radius-l) = 28px) */
  radius?: number | string;
  /** Soft violet-tinted shadow (otherwise flat) */
  elevated?: boolean;
}

export function Card({ tone = 'white', eyebrow, title, children, media, padding, radius, elevated, className, style, ...rest }: CardProps) {
  return (
    <div {...rest} className={cx('srn-card', className)} data-tone={tone} data-elevated={flag(elevated)}
      style={radius != null ? { borderRadius: radius, ...style } : style}>
      {media}
      <div className="srn-card__body" style={padding != null ? { padding } : undefined}>
        {eyebrow != null && <div className="srn-card__eyebrow">{eyebrow}</div>}
        {title != null && <div className="srn-card__title">{title}</div>}
        {children != null && <div className="srn-card__text">{children}</div>}
      </div>
    </div>
  );
}
