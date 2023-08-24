import Cell from "./Cell";
import styles from "./index.module.css";
import Row from "./Row";
import TBody from "./TBody";
import Th from "./Th";
import TheadRow from "./TheadRow";
import type { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Table: FC<Props> = ({ children }) => (
  <table className={styles.table}>{children}</table>
);

export { TheadRow, Row, Th, TBody, Cell };

export default Table;
