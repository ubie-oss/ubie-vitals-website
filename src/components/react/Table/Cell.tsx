import styles from "./Cell.module.css";
import type { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Cell: FC<Props> = ({ children }) => (
  <td className={styles.cell}>{children}</td>
);

export default Cell;
