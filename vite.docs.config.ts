import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
  root: 'docs',
  base: './',
  plugins: [react()],
  resolve: { alias: { '@serenis/design-system': resolve('src/index.ts') } },
  build: { outDir: resolve('dist-docs'), emptyOutDir: true },
});
