import clsx from 'clsx';
import styles from './Cell.module.css';
import type { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  rowHeader?: boolean;
}

const Cell: FC<Props> = ({ children, rowHeader = false }) => (
  <>
    {rowHeader ? (
      <th scope="row" className={clsx(styles.cell, styles.header)}>
        {children}
      </th>
    ) : (
      <td className={styles.cell}>{children}</td>
    )}
  </>
);

export default Cell;
