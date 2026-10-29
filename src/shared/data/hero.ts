import data from './hero.json';

export interface Stat {
  value: string;
  label: string;
}

export interface Hero {
  tagline: string;
  cta: { label: string; href: string };
  stats: Stat[];
}

export const hero: Hero = data;
