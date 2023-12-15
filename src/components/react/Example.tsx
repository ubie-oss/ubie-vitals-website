import CopyButton from './CopyButton';
import styles from './Example.module.css';
import SyntaxHighlighter from './SyntaxHighlighter';
import type { Example } from '@utils/server';
import type { FC } from 'react';

interface Props {
  example: Example;
}

const Example: FC<Props> = ({ example }) => {
  return (
    <div>
      <div className={styles.demo}>
        <a className={styles.externalLink} href={example.url} target="_blank" rel="noreferrer">
          Open Window
        </a>

        <iframe
          className={styles.demoFrame}
          src={example.url}
          title={`${example.name} example`}
          loading="lazy"
        ></iframe>
      </div>

      <div className={styles.code}>
        <SyntaxHighlighter lang="jsx">{example.code}</SyntaxHighlighter>
        <CopyButton className={styles.copy} text={example.code} />
      </div>
    </div>
  );
};

export default Example;
