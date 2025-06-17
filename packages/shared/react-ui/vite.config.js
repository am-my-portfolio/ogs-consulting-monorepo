import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
  resolve: {
    alias: {
      '@': `${path.resolve(path.resolve(), './src')}`,
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.png', '.json'],
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.ts'),
      name: 'RUI',
      fileName: (format) => `react-ui.${format}.js`,
    },
    // rollupOptions: {
    //   external: ["react"],
    //   output: {
    //     // Provide global variables to use in the UMD build
    //     // Add external deps here
    //     globals: {
    //       react: "React",
    //     },
    //   },
    // }
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'tailwindcss'],
      output: {
        globals: {
          react: 'React',
          'react-com': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
          tailwindcss: 'tailwindcss',
        },
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 1234,
    proxy: {},
    watch: {
      usePolling: true,
    },
  },
});
