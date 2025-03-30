import fs from 'node:fs';
import path from 'node:path';
import { extractRadiusData } from '../../../utils/server/radius/extractRadiusData';
import type { APIRoute } from 'astro';

interface MDXModule {
  frontmatter: {
    title: string;
    description: string;
  };
}

export const GET: APIRoute = async () => {
  try {
    const mdxPath = path.join(process.cwd(), 'src/pages/tokens/radius.mdx');
    const content = fs.readFileSync(mdxPath, 'utf-8');

    // MDXファイルのfrontmatterを取得
    const mdxFiles = await import.meta.glob<MDXModule>('/src/pages/tokens/*.mdx');
    const mdxModule = mdxFiles['/src/pages/tokens/radius.mdx'];

    if (!mdxModule) {
      throw new Error('Radius MDX file not found');
    }

    const mdx = await mdxModule();
    const radiusData = await extractRadiusData(content, mdx.frontmatter);

    return new Response(JSON.stringify(radiusData), {
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
