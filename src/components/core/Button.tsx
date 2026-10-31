import React from 'react';
import { cx, flag } from '../../utils';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'inverse' | 'ghost';
export type ButtonSize = 's' | 'm' | 'l';

/** Pill-shaped call to action. Hover = one step darker / lavender wash, press = scale(0.97). */
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  /** Trailing glyph, e.g. "→" */
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'm', fullWidth, iconRight, children, className, type = 'button', ...rest },
  ref,
) {
  return (
    <button ref={ref} type={type} {...rest} className={cx('srn-btn', className)}
      data-variant={variant} data-size={size} data-full={flag(fullWidth)}>
      {children}
      {iconRight != null && <span aria-hidden="true">{iconRight}</span>}
    </button>
  );
});
