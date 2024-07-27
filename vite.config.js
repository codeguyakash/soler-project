import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "https://j2mbwf96-8000.inc1.devtunnels.ms/",
      // "/api": "http://localhost:8000/",
    },
  },
});
