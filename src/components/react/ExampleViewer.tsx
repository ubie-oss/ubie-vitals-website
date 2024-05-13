import { Code } from './Code';
import styles from './ExampleViewer.module.css';
import type { Example } from '@utils/server';
import type { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  example: Example;
}>;

const ExampleViewer: FC<Props> = ({ example }) => {
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
        <Code lang="tsx">{example.code}</Code>
      </div>
    </div>
  );
};

export default ExampleViewer;
