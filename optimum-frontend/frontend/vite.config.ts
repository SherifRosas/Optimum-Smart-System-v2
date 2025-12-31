import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Custom plugin to handle .js files with JSX before import analysis
const jsxInJsPlugin = () => {
  return {
    name: 'jsx-in-js',
    enforce: 'pre', // Run before other plugins
    resolveId(id) {
      // Treat .js files with JSX as .jsx for import analysis
      if (id.endsWith('.js') && id.includes('src/')) {
        // Don't change the ID, just let it pass through
        return null;
      }
    },
    load(id) {
      // This helps Vite understand the file type
      if (id.endsWith('.js') && id.includes('src/')) {
        return null; // Let default loader handle it
      }
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    jsxInJsPlugin(), // Run first to mark .js files with JSX
    react({
      // Enable JSX in .js files - explicitly include all JS/TS variants
      include: /\.(jsx|tsx|js|ts)$/,
      jsxRuntime: 'automatic',
    })
  ],
  esbuild: {
    // Skip type checking during build (Vite handles this)
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
    // Configure esbuild to process JSX in .js files
    loader: {
      '.js': 'jsx',
    },
    // Ensure JSX is transformed
    jsx: 'automatic',
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    target: 'es2017', // Balance between compatibility and modern features (Safari 14+)
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false, // Keep console for debugging
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', 'lucide-react'],
          data: ['@tanstack/react-query', 'zustand', 'axios'],
          charts: ['recharts'],
        },
        // Use deterministic chunk names to prevent chunk not found errors
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
      onwarn(warning, warn) {
        // Suppress TypeScript warnings during build
        if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return;
        warn(warning);
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/hooks': path.resolve(__dirname, './src/hooks'),
      '@/services': path.resolve(__dirname, './src/services'),
      '@/stores': path.resolve(__dirname, './src/stores'),
      '@/types': path.resolve(__dirname, './src/types'),
      '@/utils': path.resolve(__dirname, './src/utils'),
      '@/config': path.resolve(__dirname, './src/config'),
      '@/lib': path.resolve(__dirname, './src/lib'),
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
});
