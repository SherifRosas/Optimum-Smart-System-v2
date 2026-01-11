import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: /\.(jsx|tsx|js|ts)$/, // Allow JSX in all these extensions
    })
  ],
  root: './frontend', // Use frontend directory as root (has index.html with cyberpunk styles)
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'], // Resolve .tsx before .js
    alias: {
      '@': path.resolve(__dirname, './frontend/src'),
      '@/components': path.resolve(__dirname, './frontend/src/components'),
      '@/hooks': path.resolve(__dirname, './frontend/src/hooks'),
      '@/services': path.resolve(__dirname, './frontend/src/services'),
      '@/stores': path.resolve(__dirname, './frontend/src/stores'),
      '@/types': path.resolve(__dirname, './frontend/src/types'),
      '@/utils': path.resolve(__dirname, './frontend/src/utils'),
      '@/config': path.resolve(__dirname, './frontend/src/config'),
      '@/lib': path.resolve(__dirname, './frontend/src/lib'),
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
      '/ws': {
        target: 'ws://localhost:8000',
        ws: true,
      },
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', 'lucide-react'],
          data: ['@tanstack/react-query', 'zustand', 'axios'],
          charts: ['recharts'],
        },
      },
    },
  },
});
