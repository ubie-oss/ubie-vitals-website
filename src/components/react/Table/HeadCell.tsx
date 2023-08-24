import styles from './HeadCell.module.css';
import type { FC, ReactNode, ThHTMLAttributes } from 'react';

type Props = {
  children: ReactNode;
} & ThHTMLAttributes<HTMLTableCellElement>;

const HeadCell: FC<Props> = ({ children }) => <th className={styles.cell}>{children}</th>;

export default HeadCell;
