import { extractIconsData } from '../../../utils/server/icons/extractIconsData';
import type { APIRoute } from 'astro';

interface MDXModule {
  frontmatter: {
    title: string;
    description: string;
  };
}

export const GET: APIRoute = async () => {
  try {
    // MDXファイルのfrontmatterを取得
    const mdxFiles = await import.meta.glob<MDXModule>('/src/pages/components/icons.mdx');
    const mdxModule = mdxFiles['/src/pages/components/icons.mdx'];

    if (!mdxModule) {
      throw new Error('Icons MDX file not found');
    }

    const mdx = await mdxModule();
    const iconsData = await extractIconsData(mdx.frontmatter);

    return new Response(JSON.stringify(iconsData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: String(error) }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
