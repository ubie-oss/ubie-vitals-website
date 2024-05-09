import { Input } from '@ubie/ubie-ui';
import styles from './_Oneline.module.css';

export const Oneline = () => (
  <div className={styles.wrapper}>
    <Input id="one-year" value="" />
    <label className={styles.label} htmlFor="one-year">
      年
    </label>
    <Input id="one-month" value="" />
    <label className={styles.label} htmlFor="one-month">
      月
    </label>
    <Input id="one-date" value="" />
    <label className={styles.label} htmlFor="one-date">
      日
    </label>
  </div>
);
