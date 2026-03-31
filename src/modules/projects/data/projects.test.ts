import { describe, expect, it } from 'vitest';
import { projects } from './projects';

describe('projects data', () => {
  it('has at least one entry', () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it('every entry has required fields', () => {
    for (const project of projects) {
      expect(project.name).toBeTruthy();
      expect(project.description).toBeTruthy();
      expect(project.stack).toBeInstanceOf(Array);
      expect(project.stack.length).toBeGreaterThan(0);
    }
  });

  it('github and live links are valid URLs when present', () => {
    for (const { github, live } of projects) {
      if (github) {
        expect(() => new URL(github)).not.toThrow();
      }
      if (live) {
        expect(() => new URL(live)).not.toThrow();
      }
    }
  });
});
