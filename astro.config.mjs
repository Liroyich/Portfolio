import { defineConfig } from "astro/config";

export default defineConfig({
  // Статическая сборка: результат в ./dist — её можно положить на любой хостинг.
  output: "static",
  site: "https://example.com", // ← свой домен
  build: {
    inlineStylesheets: "auto",
  },
  compressHTML: true,
});
