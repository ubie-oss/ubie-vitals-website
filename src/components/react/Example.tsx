import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CopyButton from './CopyButton';
import styles from './Example.module.css';
import type { exampleUrlAndFilePath } from '@utils/server';
import type { FC } from 'react';

interface Props {
  exampleUrlAndFilePath: exampleUrlAndFilePath;
}

const Example: FC<Props> = ({ exampleUrlAndFilePath }) => {
  return (
    <div className={styles.example}>
      <a className={styles.externalLink} href={exampleUrlAndFilePath.url} target="_blank" rel="noreferrer">
        Open Window
      </a>

      <div className={styles.demo}>
        <iframe
          className={styles.demoFrame}
          src={exampleUrlAndFilePath.url}
          title={`${exampleUrlAndFilePath.name} example`}
          loading="lazy"
        ></iframe>
      </div>

      <div className={styles.code}>
        <SyntaxHighlighter
          language="jsx"
          style={a11yDark}
          customStyle={{
            borderRadius: '0',
            margin: '0',
          }}
        >
          {exampleUrlAndFilePath.code}
        </SyntaxHighlighter>
        <CopyButton className={styles.copy} text={exampleUrlAndFilePath.code} />
      </div>
    </div>
  );
};

export default Example;
