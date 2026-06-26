import data from './projects.json';

export interface Project {
  name: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  slug?: string;
  href?: string;
  cta?: string;
}

export const projects: Project[] = data;
