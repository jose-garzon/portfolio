import { describe, expect, it } from 'vitest';
import { experience } from './experience';

describe('experience data', () => {
  it('has at least one entry', () => {
    expect(experience.length).toBeGreaterThan(0);
  });

  it('every entry has required fields', () => {
    for (const job of experience) {
      expect(job.company).toBeTruthy();
      expect(job.role).toBeTruthy();
      expect(job.period).toBeTruthy();
      expect(job.description).toBeTruthy();
      expect(job.stack).toBeInstanceOf(Array);
      expect(job.bullets).toBeInstanceOf(Array);
    }
  });

  it('every entry has at least one stack item and one bullet', () => {
    for (const job of experience) {
      expect(job.stack.length).toBeGreaterThan(0);
      expect(job.bullets.length).toBeGreaterThan(0);
    }
  });

  it('entries are ordered most-recent first (period starts with highest year)', () => {
    const years = experience.map((job) => parseInt(job.period.split('–')[0].trim(), 10));
    const sorted = [...years].sort((a, b) => b - a);
    expect(years).toEqual(sorted);
  });
});
