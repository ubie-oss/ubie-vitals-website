import { useEffect, useState } from 'react';
import { getHighlighter } from 'shiki';
import {
  transformerNotationHighlight,
  transformerNotationWordHighlight,
  transformerNotationDiff,
} from 'shikiji-transformers';
import type { FC } from 'react';

interface Props {
  children: string;
  lang: Lang;
}

const langs = ['typescript', 'css', 'jsx', 'tsx'];
export type Lang = (typeof langs)[number];

const SyntaxHighligter: FC<Props> = ({ children, lang }) => {
  const [code, setCode] = useState('');

  useEffect(() => {
    const convert = async () => {
      const highlighter = await getHighlighter({
        langs,
        themes: ['github-dark'],
      });

      const code = highlighter.codeToHtml(children, {
        lang,
        theme: 'github-dark',
        transformers: [transformerNotationHighlight(), transformerNotationWordHighlight(), transformerNotationDiff()],
      });
      setCode(code);
    };

    convert();
  }, [children, lang]);

  return <div dangerouslySetInnerHTML={{ __html: code }} />;
};

export default SyntaxHighligter;
