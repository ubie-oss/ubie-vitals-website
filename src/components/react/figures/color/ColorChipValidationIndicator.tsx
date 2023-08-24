import styles from './ColorChipValidationIndicator.module.css';
import type { FC } from 'react';

interface Props {
  valid: boolean;
}

const ColorChipValidationIndicator: FC<Props> = ({ valid }) => (
  <span className={styles.tag}>{valid ? 'PASS' : 'FAIL'}</span>
);

export default ColorChipValidationIndicator;
