import styles from './LinkToStorybook.module.css';
import type { FC } from 'react';

interface Props {
  href: string;
}

const LinkToStorybook: FC<Props> = ({ href }) => (
  <a href={href} className={styles.link}>
    <span className={styles.label}>Storybookを開く</span>
  </a>
);

export default LinkToStorybook;
