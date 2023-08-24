/** @type {import("prettier").Config} */

import ubieConfig from '@ubie/prettier-config';

export default {
    ...ubieConfig,
    plugins: ['prettier-plugin-astro'],
};