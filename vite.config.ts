// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
    open: false,
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'src/index.ts',
    },
  },
  optimizeDeps: {
    exclude: ['cypress/**'],
  },
});
