import { theme as themeConfig } from '../../../../tailwind.config';
import { theme } from 'twin.macro';

export type ThemeMode = 'light' | 'dark';

const mode: ThemeMode = (localStorage.getItem('theme') as ThemeMode) || 'light';

export function colors(color: keyof typeof themeConfig.dark.colors) {
  return (theme() as any)[mode].colors[String(color)];
}
