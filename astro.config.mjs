// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://www.example.com",
  integrations: [
    mdx(),
    sitemap(),
    sanity({
      projectId: "jrbn2020",
      dataset: "production",
      useCdn: false,
    }),
  ],
});
