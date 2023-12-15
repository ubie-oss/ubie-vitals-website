import { useEffect, useState } from 'react';
import { getHighlighter } from 'shikiji';
import styles from './SyntaxHighlighter.module.css';
import type { FC } from 'react';

interface Props {
  children: string;
  lang: Lang;
}

const langs = ['javascript', 'typescript', 'html', 'css', 'jsx'];
type Lang = (typeof langs)[number];

const SyntaxHighligter: FC<Props> = ({ children, lang }) => {
  const [code, setCode] = useState('');

  useEffect(() => {
    const convert = async () => {
      const highlighter = await getHighlighter({
        langs,
        themes: ['github-dark'],
      });

      const code = highlighter.codeToHtml(children, {
        lang: 'javascript',
        theme: 'github-dark',
      });
      setCode(code);
    };

    convert();
  }, [children, lang]);

  return <div className={styles.wrapper} dangerouslySetInnerHTML={{ __html: code }} />;
};

export default SyntaxHighligter;
