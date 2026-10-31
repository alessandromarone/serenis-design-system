import React from 'react';
import { cx } from '../../utils';

/** Large display headline for social slides, with optional supporting line and hand-marker label. */
export interface StatementProps {
  /** Short uppercase label in a white hand-drawn pill above the headline (e.g. "Ascoltare la rabbia") */
  marker?: React.ReactNode;
  children?: React.ReactNode;
  /** Supporting line in Mona Sans Regular (e.g. "Le abbiamo chieste a voi 💜") */
  sub?: React.ReactNode;
  /** m = 72px · l = 88px · xl = 110px on the 1080 canvas */
  size?: 'm' | 'l' | 'xl';
  className?: string;
  style?: React.CSSProperties;
}

export function Statement({ marker, children, sub, size = 'l', className, style }: StatementProps) {
  return (
    <div className={cx('srn-statement', className)} data-size={size} style={style}>
      {marker != null && <div className="srn-statement__marker">{marker}</div>}
      <div className="srn-statement__headline">{children}</div>
      {sub != null && <div className="srn-statement__sub">{sub}</div>}
    </div>
  );
}
