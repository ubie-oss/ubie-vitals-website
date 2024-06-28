import CopyButton from '@components/react/CopyButton';
import styles from './SimpleCode.module.css';
import type { FC } from 'react';

export type Props = {
  children: string;
};

export const SimpleCode: FC<Props> = ({ children }) => (
  <div className={styles.wrapper}>
    <code className={styles.code}>{children}</code>
    <div className={styles.copy}>
      <CopyButton text={children} label="コードをコピー" secondary />
    </div>
  </div>
);
