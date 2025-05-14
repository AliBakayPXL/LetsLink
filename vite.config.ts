import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
  },
  base: "./",
  optimizeDeps: {
    include: [ 'swiper',
      'swiper/react',
      'swiper/modules',
      'swiper/css',
      'swiper/css/pagination'],
  },
});
