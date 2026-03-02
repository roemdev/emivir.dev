import { describe, it, expect } from 'vitest';
import { solutions } from './solutionsData';

describe('solutions data', () => {
  it('should have the correct structure and content', () => {
    expect(solutions).toBeInstanceOf(Array);
    expect(solutions.length).toBeGreaterThan(0);

    solutions.forEach(solution => {
      expect(solution).toHaveProperty('icon');
      expect(typeof solution.icon).toBe('string');

      expect(solution).toHaveProperty('title');
      expect(typeof solution.title).toBe('string');
      expect(solution.title.length).toBeGreaterThan(0);

      expect(solution).toHaveProperty('description');
      expect(typeof solution.description).toBe('string');
      expect(solution.description.length).toBeGreaterThan(0);
    });
  });

  it('should contain specific expected solutions', () => {
    const titles = solutions.map(s => s.title);
    expect(titles).toContain('Profesionales');
    expect(titles).toContain('Impacto Social');
  });
});
