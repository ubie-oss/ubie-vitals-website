import fs from 'node:fs';
import path from 'node:path';

const EXAPMLES_DIR = 'src/pages/components/examples';
const EXAPMLES_COMPONENT_DIR = 'src/components/react/examples';
const EXAPMLES_URL = '/components/examples';

export type Example = {
  url: string;
  code: string;
  name: string;
};

// スニークケースをキャメルケースに変換する。先頭は大文字に
const toCamelCase = (str: string): string => {
  return str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
};

// defaultを先頭に持ってくるソート関数, Exampleの項目を受け取る
const sortDefaultFirst = (a: Example, b: Example): number => {
  if (a.name === 'default') {
    return -1;
  }
  if (b.name === 'default') {
    return 1;
  }
  return 0;
};

// expampleKeyとしてstackを投げると
// src/pages/components/examples/stack/* を検索する
export const getAllExample = (exampleKey: string): Example[] => {
  const exampleDir = path.join(EXAPMLES_DIR, exampleKey);
  const exapmleComponentDir = path.join(EXAPMLES_COMPONENT_DIR, exampleKey);
  const exampleUrl = path.join(EXAPMLES_URL, exampleKey);

  const files = fs.readdirSync(exampleDir);

  const examples = files.map((file) => {
    const filePath = path.join(exapmleComponentDir, toCamelCase(file).replace('.astro', 'Example.tsx'));
    const code = fs.readFileSync(filePath, 'utf-8');

    // .astroを外してURLに組み立てる
    const url = path.join(exampleUrl, file.replace('.astro', ''));

    const name = file.replace('.astro', '').replaceAll('-', ' ');

    return { name, url, code };
  });

  // 'default'を先頭に持ってくる
  return examples.sort(sortDefaultFirst);
};

// ubie-uiにおいて、LinkButtonはButtonと同一ディレクトリに存在する
const convertKeyLinkButtonToButton = (key: string): string => {
  return key.replace('link-button', 'button');
};

export const buildComponentPath = (exampleKey: string): string => {
  return `./node_modules/@ubie/ubie-ui/dist/components/${toCamelCase(
    convertKeyLinkButtonToButton(exampleKey),
  )}/${toCamelCase(exampleKey)}.d.ts`;
};
