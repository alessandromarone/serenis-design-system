import React from 'react';

/** Pill label for topics, categories and short highlights ("Ansia", "Gratis"). */
export interface TagProps {
  tone?: 'brand' | 'soft' | 'white' | 'outline' | 'dark';
  size?: 's' | 'm' | 'l';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Tag(props: TagProps): JSX.Element;
