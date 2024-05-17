import styles from './Row.module.css';
import type { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Row: FC<Props> = ({ children }) => <tr className={styles.row}>{children}</tr>;

export default Row;
