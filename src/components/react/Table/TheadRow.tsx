import styles from "./TheadRow.module.css";
import type { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const TheadRow: FC<Props> = ({ children }) => (
  <thead>
    <tr className={styles.row}>{children}</tr>
  </thead>
);

export default TheadRow;
