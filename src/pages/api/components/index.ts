import { buildComponentPath } from '@utils/server';
import { unionBy } from 'es-toolkit';
import { convertTypeSetKeyword } from '@utils/server/props/convertTypeSetKeyword';
import { extractPropsFromFile } from '@utils/server/props/extractPropsFromFile';
import type { Prop } from '@types';
import type { APIRoute } from 'astro';

interface MDXModule {
  frontmatter: {
    title: string;
    description: string;
    repositoryUrl?: string;
    thumbnail?: string;
    props?: Prop[];
    exampleKey?: string;
  };
  rawContent?: () => string;
}

interface Component {
  name: string;
  title: string;
  description: string;
  repositoryUrl?: string;
  thumbnail?: string;
  apiUrl: string;
  props: Prop[];
}

export const GET: APIRoute = async () => {
  try {
    // MDXファイルの一覧を取得
    const mdxFiles = await import.meta.glob<MDXModule>('../../../pages/components/*.mdx');

    const components = await Promise.all(
      Object.entries(mdxFiles).map(async ([path, loader]) => {
        const mdx = await loader();
        const { frontmatter } = mdx;

        // ファイル名（コンポーネント名）を取得
        const componentName = path.split('/').pop()?.replace('.mdx', '') || '';

        // Propsの取得
        const props = frontmatter.props || [];
        const filePath = frontmatter.exampleKey ? buildComponentPath(frontmatter.exampleKey) : '';

        const convertedProps = props.map((prop: Prop) => ({
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

        const component: Component = {
          name: componentName,
          title: frontmatter.title,
          description: frontmatter.description,
          repositoryUrl: frontmatter.repositoryUrl,
          thumbnail: frontmatter.thumbnail,
          apiUrl: `/api/components/${componentName}`,
          props: propsArray,
        };

        return component;
      }),
    );

    return new Response(
      JSON.stringify({
        components: components.sort((a, b) => a.name.localeCompare(b.name)),
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
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
