import { theme as themeConfig } from '../../../../tailwind.config';
import { theme } from 'twin.macro';

export type ThemeMode = 'light' | 'dark';

export const themeMode: ThemeMode =
  (localStorage.getItem('theme') as ThemeMode) || 'light';

export function colors(color: keyof typeof themeConfig.dark.colors) {
  return (theme() as any)[themeMode].colors[String(color)];
}
