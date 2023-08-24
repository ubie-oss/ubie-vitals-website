import styles from './HeadRow.module.css';
import type { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const HeadRow: FC<Props> = ({ children }) => <tr className={styles.row}>{children}</tr>;

export default HeadRow;
