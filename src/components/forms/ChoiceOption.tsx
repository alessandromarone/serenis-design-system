import React from 'react';
import { cx, flag } from '../../utils';

/** Selectable answer row for the entry questionnaire (radio or, with `multi`, checkbox). */
export interface ChoiceOptionProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  label: React.ReactNode;
  selected?: boolean;
  /** Square checkbox indicator instead of radio */
  multi?: boolean;
}

export function ChoiceOption({ label, selected = false, multi, className, ...rest }: ChoiceOptionProps) {
  return (
    <button type="button" role={multi ? 'checkbox' : 'radio'} aria-checked={selected} {...rest}
      className={cx('srn-choice', className)} data-multi={flag(multi)}>
      <span className="srn-choice__mark" aria-hidden="true"><span className="srn-choice__dot" /></span>
      {label}
    </button>
  );
}
