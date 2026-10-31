import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { cpSync } from 'node:fs';
import { resolve } from 'node:path';

const ASSET = /\.(png|svg|otf|ttf|woff2?)$/;

/** Ship assets, fonts and raw CSS as real files next to the JS (no base64 inlining). */
function copyStatic(): Plugin {
  return {
    name: 'serenis-copy-static',
    closeBundle() {
      for (const p of ['assets/logo', 'assets/illustrations', 'fonts', 'styles', 'styles.css']) {
        cpSync(resolve('src', p), resolve('dist', p), { recursive: true });
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), copyStatic()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    copyPublicDir: false,
    lib: { entry: resolve('src/index.ts'), formats: ['es'] },
    rollupOptions: {
      // Asset imports stay as `import x from './x.png'` so the consumer's bundler emits them.
      external: id => ['react', 'react-dom', 'react/jsx-runtime'].includes(id) || ASSET.test(id),
      output: { preserveModules: true, preserveModulesRoot: 'src', entryFileNames: '[name].js' },
    },
  },
});
