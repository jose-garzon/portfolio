import { defineConfig } from 'vitest/config';

export default defineConfig({
  esbuild: {
    jsx: 'automatic',
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    exclude: ['**/node_modules/**', '**/dist/**'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      include: ['src/modules/**/*.{ts,tsx}', 'src/shared/**/*.{ts,tsx}'],
      exclude: ['**/*.d.ts', '**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}'],
    },
  },
});
