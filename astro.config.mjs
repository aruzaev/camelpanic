// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://www.camelpanic.com",
  output: "server",
  adapter: vercel(),
  integrations: [
    mdx(),
    sitemap(),
    sanity({
      projectId: "jrbn2020",
      dataset: "production",
      studioBasePath: "/admin",
      useCdn: false,
      apiVersion: "2024-02-20",
      perspective: "published",
    }),
  ],
});
