import Cell from './Cell';
import HeadCell from './HeadCell';
import HeadRow from './HeadRow';
import styles from './index.module.css';
import Row from './Row';
import TBody from './TBody';
import Th from './Th';
import THead from './THead';
import type { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Table: FC<Props> = ({ children }) => <table className={styles.table}>{children}</table>;

export { HeadRow, Row, Th, TBody, Cell, THead, HeadCell };

export default Table;
