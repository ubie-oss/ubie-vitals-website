import { InformationIcon } from '@ubie/ubie-icons';
import styles from './Callout.module.css';
import type { FC, ReactNode } from 'react';

export type Props = {
  children: ReactNode;
};

export const Callout: FC<Props> = ({ children }) => (
  <div className={styles.callout}>
    <div className={styles.icon}>
      <InformationIcon />
    </div>
    <div className={styles.content}>{children}</div>
  </div>
);
