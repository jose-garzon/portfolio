import data from './about.json';

export interface CurrentItem {
  text: string;
  highlight?: string;
}

export interface About {
  heading: string;
  paragraphs: string[];
  skills: string[];
  currently: CurrentItem[];
}

export const about: About = data;
