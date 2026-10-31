import React from 'react';
import { LOGOS, type LogoFile } from '../../assets';
import { cx } from '../../utils';

export type LogoVariant = 'logo' | 'payoff' | 'mark';
export type LogoColor = 'violet' | 'black' | 'white';

const FILES: Record<LogoVariant, Record<LogoColor, LogoFile>> = {
  logo: { violet: 'serenis-logo-violet', black: 'serenis-logo-black', white: 'serenis-logo-white' },
  payoff: { violet: 'serenis-logo-payoff-default', black: 'serenis-logo-payoff-black', white: 'serenis-logo-payoff-white' },
  mark: { violet: 'serenis-pittogramma-default', black: 'serenis-pittogramma-black', white: 'serenis-pittogramma-white' },
};
const COLOR: Record<LogoColor, string> = { violet: 'var(--violet-500)', black: 'var(--ink)', white: '#fff' };

/** Resolve a logo file URL; `base` overrides the bundled asset (e.g. a CDN folder). */
export function logoSrc(variant: LogoVariant, color: LogoColor, base?: string) {
  const file = FILES[variant][color];
  return base != null ? `${base}${file}.svg` : LOGOS[file];
}

/** Wordmark, payoff lockup or pittogramma, in the three allowed colours only. */
export interface LogoProps {
  /** logo = pittogramma + wordmark; payoff = with tagline; mark = pittogramma only */
  variant?: LogoVariant;
  /** Allowed combinations: violet on white/lavender, white on violet/dark/photo, black on white */
  color?: LogoColor;
  /** Secondary logo: vertical name, e.g. "psicologia", "nutrizione", "medicina". Reconstructed lockup — replace with official files. */
  vertical?: string;
  /** horizontal = extended lockup with divider; compact = name stacked under the logo */
  layout?: 'horizontal' | 'compact';
  /** Height of the logo in px (default 32) */
  height?: number;
  /** Optional folder URL that overrides the bundled SVGs (must end with "/") */
  base?: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function Logo({ variant = 'logo', color = 'violet', vertical, layout = 'horizontal', height = 32, base, alt = 'Serenis', className, style }: LogoProps) {
  if (!vertical) {
    return <img src={logoSrc(variant, color, base)} alt={alt} className={cx('srn-logo', className)} style={{ height, ...style }} />;
  }
  const c = COLOR[color];
  const compact = layout === 'compact';
  return (
    <div className={cx('srn-logo-lockup', className)} data-layout={layout}
      style={{ gap: height * (compact ? 0.18 : 0.35), ...style }}>
      <img src={logoSrc('logo', color, base)} alt={alt} className="srn-logo" style={{ height }} />
      {!compact && <span className="srn-logo-lockup__rule" aria-hidden="true" style={{ width: Math.max(1.5, height * 0.05), background: c }} />}
      <span className="srn-logo-lockup__name" style={{ fontSize: height * 0.62, color: c }}>{vertical}</span>
    </div>
  );
}
