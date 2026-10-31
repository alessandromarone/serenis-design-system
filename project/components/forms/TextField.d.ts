import React from 'react';

/** Labelled text input with hint/error. */
export interface TextFieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  hint?: string;
  error?: string;
  type?: 'text' | 'email' | 'tel' | 'password';
  style?: React.CSSProperties;
}
export function TextField(props: TextFieldProps): JSX.Element;
