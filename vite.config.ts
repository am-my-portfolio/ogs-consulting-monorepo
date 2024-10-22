import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";
// import tsconfigPaths from 'vite-tsconfig-paths'; // https://www.npmjs.com/package/vite-tsconfig-paths

export default defineConfig({
  plugins: [vue(), svgLoader()],
  base: "./",
  build: {
    chunkSizeWarningLimit: 1000,
    minify: true,
    sourcemap: "inline",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@auth": path.resolve(__dirname, "./src/auth"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@helpers": path.resolve(__dirname, "./src/helpers"),
      "@views": path.resolve(__dirname, "./src/views"),
    },
    extensions: [".ts", ".js", ".vue", ".png", ".json"],
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    proxy: {},
    watch: {
      usePolling: true,
    },
  },
});
