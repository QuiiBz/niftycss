import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  optimizeDeps: {
    include: [
      '@niftycss/core',
      '@niftycss/react'
    ],
  },
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react')
    }
  }
});
