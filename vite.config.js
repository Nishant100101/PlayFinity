import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import imagemin from "vite-plugin-imagemin";
import imageminGifsicle from "imagemin-gifsicle";
import imageminJpegtran from "imagemin-jpegtran";
import imageminOptipng from "imagemin-optipng";
import imageminSvgo from "imagemin-svgo";

export default defineConfig({
  plugins: [
    react(),
    imagemin({
      gifsicle: imageminGifsicle(),
      jpegtran: imageminJpegtran(),
      optipng: imageminOptipng(),
      svgo: imageminSvgo(),
    }),
  ],
  base: "/PlayFinity/",
});
