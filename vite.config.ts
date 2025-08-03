import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "./",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
      "@assets": path.resolve(__dirname, "./client/assets"),
    },
  },
  root: "./client",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});
