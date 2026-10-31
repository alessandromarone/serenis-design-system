import React from 'react';
import { cx, flag } from '../../utils';

/** Labelled text input with hint or error message. */
export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type' | 'value'> {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  hint?: string;
  error?: string;
  type?: 'text' | 'email' | 'tel' | 'password';
}

export function TextField({ label, hint, error, onChange, type = 'text', className, style, id, ...rest }: TextFieldProps) {
  const autoId = React.useId();
  const inputId = id ?? autoId;
  const msg = error || hint;
  return (
    <div className={cx('srn-field', className)} data-error={flag(error)} style={style}>
      {label && <label className="srn-field__label" htmlFor={inputId}>{label}</label>}
      <input {...rest} id={inputId} type={type} className="srn-field__input"
        aria-invalid={error ? true : undefined} aria-describedby={msg ? `${inputId}-msg` : undefined}
        onChange={e => onChange?.(e.target.value)} />
      {msg && <span id={`${inputId}-msg`} className="srn-field__msg">{msg}</span>}
    </div>
  );
}
