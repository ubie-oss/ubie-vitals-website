import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CopyButton from './CopyButton';
import styles from './Example.module.css';
import type { Example } from '@utils/server';
import type { FC } from 'react';

interface Props {
  example: Example;
}

const Example: FC<Props> = ({ example }) => {
  return (
    <div className={styles.example}>
      <a className={styles.externalLink} href={example.url} target="_blank" rel="noreferrer">
        Open Window
      </a>

      <div className={styles.demo}>
        <iframe
          className={styles.demoFrame}
          src={example.url}
          title={`${example.name} example`}
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
          {example.code}
        </SyntaxHighlighter>
        <CopyButton className={styles.copy} text={example.code} />
      </div>
    </div>
  );
};

export default Example;
