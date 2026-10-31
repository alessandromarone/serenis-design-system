import React from 'react';

/** Wordmark, payoff lockup or pittogramma, in the three allowed colours only. */
export interface LogoProps {
  /** logo = pittogramma + wordmark; payoff = with tagline; mark = pittogramma only */
  variant?: 'logo' | 'payoff' | 'mark';
  /** Only allowed colour combinations: violet on white/lavender, white on violet/photo, black on white */
  color?: 'violet' | 'black' | 'white';
  /** Secondary logo: vertical name, e.g. "psicologia", "nutrizione", "medicina" */
  vertical?: string;
  /** horizontal = extended lockup; compact = name stacked under the logo */
  layout?: 'horizontal' | 'compact';
  /** Height of the logo in px */
  height?: number;
  /** Path to assets/logo/ relative to the page (default: window.SERENIS_ASSET_BASE + 'assets/logo/') */
  base?: string;
  style?: React.CSSProperties;
}
export function Logo(props: LogoProps): JSX.Element;
