import React from 'react';
import { logoSrc } from '../brand/Logo';
import { cx } from '../../utils';

export type SlideTone = 'white' | 'tint' | 'lilac' | 'violet' | 'dark';
export type SlideFormat = 'portrait' | 'square' | 'story';

export const SLIDE_HEIGHT: Record<SlideFormat, number> = { portrait: 1350, square: 1080, story: 1920 };
const DARK: SlideTone[] = ['violet', 'dark'];

/** Instagram slide on the native 1080-wide canvas (1080×1350 / 1080×1080 / 1080×1920), logo top-left. */
export interface SocialSlideProps {
  /** white · tint (lavender) · lilac · violet · dark (navy) */
  tone?: SlideTone;
  format?: SlideFormat;
  showLogo?: boolean;
  /** Text alignment of the content column */
  align?: 'left' | 'center';
  /** Visual scale of the 1080-wide canvas (e.g. 0.3 for previews, 1 for export) */
  scale?: number;
  /** Optional logo folder URL overriding the bundled SVGs */
  base?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function SocialSlide({ tone = 'white', format = 'portrait', showLogo = true, align = 'left', scale = 1, base, children, className, style }: SocialSlideProps) {
  const H = SLIDE_HEIGHT[format] ?? 1350;
  const onDark = DARK.includes(tone);
  return (
    <div className={cx('srn-slide', className)} style={{ width: 1080 * scale, height: H * scale, ...style }}>
      <div className="srn-slide__canvas" data-tone={tone} data-align={align}
        style={{ height: H, transform: scale === 1 ? undefined : `scale(${scale})` }}>
        {showLogo && <img className="srn-slide__logo" src={logoSrc('logo', onDark ? 'white' : 'black', base)} alt="Serenis" />}
        {children}
      </div>
    </div>
  );
}
