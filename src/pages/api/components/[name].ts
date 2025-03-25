import fs from 'node:fs';
import path from 'node:path';
import { unionBy } from 'es-toolkit';
import { getAllExample, buildComponentPath, type Example } from '@utils/server';
import { convertTypeSetKeyword } from '@utils/server/props/convertTypeSetKeyword';
import { extractPropsFromFile } from '@utils/server/props/extractPropsFromFile';
import type { Prop } from '@types';
import type { APIRoute, GetStaticPaths } from 'astro';

interface MDXModule {
  frontmatter: {
    title: string;
    description: string;
    exampleKey?: string;
    props?: Prop[];
    repositoryUrl?: string;
  };
  rawContent?: () => string;
}

// 動的ルーティングのためのパスを生成
export const getStaticPaths = (async () => {
  const mdxFiles = await import.meta.glob<MDXModule>('../../../pages/components/*.mdx');
  return Object.keys(mdxFiles).map((path) => {
    const name = path.split('/').pop()?.replace('.mdx', '');
    return { params: { name } };
  });
}) satisfies GetStaticPaths;

// MDXファイルの内容を直接読み込む関数
const getMDXContent = (componentName: string): string => {
  const mdxPath = path.join(process.cwd(), 'src/pages/components', `${componentName}.mdx`);
  try {
    return fs.readFileSync(mdxPath, 'utf-8');
  } catch (error) {
    console.error(`Failed to read MDX file: ${mdxPath}`, error);
    return '';
  }
};

// MDXコンテンツからUsageセクションを抽出する関数
const extractUsageSection = (content: string): string => {
  const usageMatch = content.match(/## Usage\n\n([\s\S]*?)(?=\n## |$)/);
  if (!usageMatch) return '';

  return usageMatch[1].trim();
};

type Component = {
  title: string;
  description: string;
  props: Prop[];
  examples: Example[];
  repositoryUrl?: string;
  content: string;
  usage: string;
};

export const GET: APIRoute = async ({ params }) => {
  try {
    const componentName = params.name;
    if (!componentName) {
      return new Response(JSON.stringify({ error: 'Component name is required' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    // MDXファイルの内容を取得
    const mdxFiles = await import.meta.glob<MDXModule>('../../../pages/components/*.mdx');
    const mdxPath = Object.keys(mdxFiles).find((path) => {
      const name = path.split('/').pop()?.replace('.mdx', '');
      return name === componentName;
    });

    if (!mdxPath || !mdxFiles[mdxPath]) {
      return new Response(JSON.stringify({ error: 'Component not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    const mdx = await mdxFiles[mdxPath]();
    const { frontmatter } = mdx;
    const content = getMDXContent(componentName);

    // Propsの取得
    const props = frontmatter.props || [];
    const filePath = frontmatter.exampleKey ? buildComponentPath(frontmatter.exampleKey) : '';

    const convertedProps = props.map((prop) => ({
      ...prop,
      type: convertTypeSetKeyword(prop.type),
    }));

    // ComponentLayout.astroと同様の処理でpropsを結合
    const propsArray = [
      ...unionBy(convertedProps, extractPropsFromFile(filePath), (p: Prop) => p.name),
      {
        name: 'data-*',
        type: 'string',
        description: 'Custom data attributes',
        required: false,
      },
    ].sort((a, b) => a.name.localeCompare(b.name));

    // Examplesの取得
    const examples = getAllExample(componentName);

    // Usageセクションの抽出
    const usage = extractUsageSection(content);

    // レスポンスの構築
    const response: Component = {
      title: frontmatter.title,
      description: frontmatter.description,
      props: propsArray,
      examples: examples,
      repositoryUrl: frontmatter.repositoryUrl,
      content: content,
      usage: usage,
    };

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
