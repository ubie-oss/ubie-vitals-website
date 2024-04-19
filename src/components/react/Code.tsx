import styles from './Code.module.css';
import CopyButton from './CopyButton';
import SyntaxHighligter, { type Lang } from './SyntaxHighlighter';
import type { FC } from 'react';

export type Props = {
  children: string;
  lang: Lang;
};

export const Code: FC<Props> = ({ children, lang }) => (
  <div className={styles.wrapper}>
    <span className={styles.copy}>
      <CopyButton text={children} invert />
    </span>
    <SyntaxHighligter lang={lang}>{children}</SyntaxHighligter>
  </div>
);
