import { Input } from '@ubie/ubie-ui';
import styles from './_Oneline.module.css';
import type { FC } from 'react';

export const Oneline: FC = () => (
  <div className={styles.wrapper}>
    <Input id="one-year" />
    <label className={styles.label} htmlFor="one-year">
      年
    </label>
    <Input id="one-month" />
    <label className={styles.label} htmlFor="one-month">
      月
    </label>
    <Input id="one-date" />
    <label className={styles.label} htmlFor="one-date">
      日
    </label>
  </div>
);
