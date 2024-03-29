/// <reference types="vitest" />
import { getViteConfig } from 'astro/config';

export default getViteConfig({
  define: {
    'import.meta.vitest': 'undefined',
  },
  test: {
    /* for example, use global to avoid globals imports (describe, test, expect): */
    globals: true,
    includeSource: ['src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
