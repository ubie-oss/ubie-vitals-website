import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import { defineConfig } from 'astro/config';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import { SITE_URL_BASE } from './constants.ts'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx({
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'append' }],
    ]
  })],
  site: 'https://ubie-vitals.github.io',
  base: SITE_URL_BASE,
});