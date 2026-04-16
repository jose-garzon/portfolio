import data from './projects.json';

export interface Project {
  name: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

export const projects: Project[] = data;
