import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/ETDM-LijTemesgen-Personal-Website/",
  plugins: [react()],
  build: {
    outDir: "build",
  },
  server: {
    open: true,
  },
  resolve: {
    alias: {
      // Any path aliases can go here if needed
    },
  },
  // Ensure proper fallback to index.html for SPA
  esbuild: {},
});
