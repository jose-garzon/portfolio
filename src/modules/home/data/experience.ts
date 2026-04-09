import data from './experience.json';

export interface Job {
  company: string;
  role: string;
  period: string;
  description: string;
  stack: string[];
  bullets: string[];
}

export const experience: Job[] = data;
