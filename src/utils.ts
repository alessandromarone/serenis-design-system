export const cx = (...c: Array<string | false | null | undefined>) => c.filter(Boolean).join(' ');
/** Boolean data-attribute helper: present when true, omitted otherwise. */
export const flag = (on: unknown) => (on ? '' : undefined);
