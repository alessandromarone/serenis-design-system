import React from 'react';
import { cx } from '../../utils';

export type TagTone = 'brand' | 'soft' | 'white' | 'outline' | 'dark';

/** Pill label for topics, categories and short highlights ("Ansia", "Gratis"). */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: TagTone;
  size?: 's' | 'm' | 'l';
}

export function Tag({ tone = 'soft', size = 'm', className, ...rest }: TagProps) {
  return <span {...rest} className={cx('srn-tag', className)} data-tone={tone} data-size={size} />;
}
