import React from 'react';

/**
 * Instagram slide frame (1080×1350 / 1080×1080 / 1080×1920) with the logo top-left.
 * @startingPoint section="Social" subtitle="Instagram carousel slide, 4:5" viewport="700x420"
 */
export interface SocialSlideProps {
  /** white · tint (lavender) · lilac · violet · dark (navy) */
  tone?: 'white' | 'tint' | 'lilac' | 'violet' | 'dark';
  format?: 'portrait' | 'square' | 'story';
  showLogo?: boolean;
  /** Text alignment of the content column */
  align?: 'left' | 'center';
  /** Visual scale of the 1080-wide canvas (e.g. 0.3 for previews) */
  scale?: number;
  /** Path to assets/logo/ */
  base?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function SocialSlide(props: SocialSlideProps): JSX.Element;
