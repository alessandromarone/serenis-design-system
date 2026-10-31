import React from 'react';

/** Selectable answer row for the entry questionnaire. */
export interface ChoiceOptionProps {
  label: React.ReactNode;
  selected?: boolean;
  /** Square checkbox indicator instead of radio */
  multi?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export function ChoiceOption(props: ChoiceOptionProps): JSX.Element;
