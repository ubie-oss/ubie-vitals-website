import styles from './Th.module.css';
import type { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Th: FC<Props> = ({ children }) => <th className={styles.th}>{children}</th>;

export default Th;
