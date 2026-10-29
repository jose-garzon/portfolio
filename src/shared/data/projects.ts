import data from './projects.json';

export interface Project {
  name: string;
  kind: string;
  description: string;
  signal?: string;
  image?: string;
  stack: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  slug?: string;
  href?: string;
  cta?: string;
}

export const projects: Project[] = data;
