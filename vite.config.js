import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
// vite config
export default defineConfig({
  base: "/Portfolio_/",
  plugins: [react()],
});
