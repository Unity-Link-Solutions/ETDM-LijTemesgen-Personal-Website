import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/ETDM-LijTemesgen-Personal-Website/", // Ensure this matches your repository name
  plugins: [react()],
  build: {
    outDir: "build",
  },
});