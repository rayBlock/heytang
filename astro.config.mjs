import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import AutoImport from "astro-auto-import";
import { defineConfig, squooshImageService } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import config from "./src/config/config.json";
import icon from "astro-icon";
import partytown from "@astrojs/partytown";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  // adapter: aws,
  // site: config.site.base_url,
  base: config.site.base_path ? config.site.base_path : "/",
  trailingSlash: config.site.trailing_slash ? "always" : "never",
  image: {
    entrypoint: 'astro/assets/services/sharp',
    config: {
      limitInputPixels: false,
   },
  },
  integrations: [react(), sitemap(), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), AutoImport({
    imports: []
  }), mdx(), icon({
    include: {
      tabler: ['*']
    }
  }), partytown({
    config: {
      debug: true,
      forward: ['dataLayer.push']
    }
  })
  // solidJs()
  ],
  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, {
      test: "Table of contents"
    }]],
    shikiConfig: {
      theme: {
        light: 'dracula',
        dark: 'github-dark',
      },
      wrap: true
    },
    extendDefaultPlugins: true
  }
});