import CopyButton from '@components/react/CopyButton';
import { convertHexWithPercentage, convertDisplayName, deleteAlpha } from '@utils/client';
import styles from './BaseGrid.module.css';
import type { DesignToken } from '@types';
import type { FC } from 'react';

interface Props {
  colors: {
    token: DesignToken;
    description?: string;
  }[];
}

const BaseGrid: FC<Props> = ({ colors }) => (
  <div className={styles.tableWrapper}>
    <table className={styles.table}>
      <thead>
        <tr className={styles.rowHead}>
          <th scope="column" className={styles.cellHead}>
            Name
          </th>
          <th scope="column" className={styles.cellHead}>
            HEX/Alpha
          </th>
          <th scope="column" className={styles.cellHead}>
            Description
          </th>
          <th scope="column" className={styles.cellHead}>
            Copy
          </th>
        </tr>
      </thead>
      <tbody>
        {colors.map((color) => (
          <tr key={color.token.name}>
            <th scope="row" className={styles.cell}>
              <div className={styles.colorName}>
                <span className={styles.colorChip} style={{ backgroundColor: color.token.value }} />
                {convertDisplayName(color.token.name)}
              </div>
            </th>
            <td className={styles.cell}>
              <code>{convertHexWithPercentage(color.token.value)}</code>
            </td>
            <td className={styles.cell}>{color.description ? color.description : '-'}</td>
            <td className={styles.cellCopy}>
              <CopyButton label="HEX" text={deleteAlpha(color.token.value)}></CopyButton>
              <CopyButton label="CSS" text={`var(--${color.token.path?.[0]}-${color.token.path?.[1]})`}></CopyButton>
              <CopyButton
                label="JS"
                text={`DesignToken.${color.token.path?.[0]}['${color.token.path?.[1]}']`}
              ></CopyButton>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default BaseGrid;
