import clsx from 'clsx';
import { Code } from './Code';
import styles from './ExampleViewer.module.css';
import type { Example } from '@utils/server';
import type { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  example: Example;
  size: 'md' | 'lg';
}>;

const ExampleViewer: FC<Props> = ({ example, size = 'md' }) => {
  return (
    <div>
      <div className={clsx(styles.demo, size === 'lg' && styles.lg)}>
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
