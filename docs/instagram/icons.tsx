import React from 'react';
import {
  Bookmark, ChevronLeft, Copy, Ellipsis, Grid3x3, Heart, Link, Menu, MessageCircle, Music, Pin, Play,
  Repeat2, Send, SquarePlay, SquareUser, UserPlus, Volume2, type LucideIcon,
} from 'lucide-react';

/** Platform chrome icons — Lucide stands in for Instagram's own icon set. */
const ICONS = {
  bookmark: Bookmark, 'chevron-left': ChevronLeft, copy: Copy, ellipsis: Ellipsis, 'grid-3x3': Grid3x3, heart: Heart, link: Link,
  menu: Menu, 'message-circle': MessageCircle, music: Music, pin: Pin, play: Play, 'repeat-2': Repeat2, send: Send,
  'square-play': SquarePlay, 'square-user': SquareUser, 'user-plus': UserPlus, 'volume-2': Volume2,
} satisfies Record<string, LucideIcon>;
export type IconName = keyof typeof ICONS;

export function Ic({ n, s = 24, color = '#000', style }: { n: IconName; s?: number; color?: string; style?: React.CSSProperties }) {
  const C = ICONS[n];
  return <C size={s} color={color} strokeWidth={2} aria-hidden="true" style={{ display: 'block', flex: 'none', ...style }} />;
}
