import React from 'react';

/**
 * Pill-shaped call to action.
 * @startingPoint section="Core" subtitle="Pill buttons in five variants" viewport="700x300"
 */
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'inverse' | 'ghost';
  size?: 's' | 'm' | 'l';
  disabled?: boolean;
  fullWidth?: boolean;
  /** Trailing glyph, e.g. "→" */
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export function Button(props: ButtonProps): JSX.Element;
