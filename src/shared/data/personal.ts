import data from './personal.json';

export interface PersonalInfo {
  name: { first: string; last: string };
  title: string;
  links: {
    github: string;
    linkedin: string;
    email: string;
  };
}

export const personal: PersonalInfo = data;

export const fullName = `${data.name.first} ${data.name.last}`;
