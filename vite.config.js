import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
// config file
export default defineConfig({
  base: "/Portfolio_/",
  plugins: [react()],
});
