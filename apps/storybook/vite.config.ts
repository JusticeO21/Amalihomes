import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@amalihomes/ui": resolve(__dirname, "../../packages/ui/src"),
    },
  },
});
