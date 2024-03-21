import { CopyIcon, CheckAIcon } from '@ubie/ubie-icons';
import { clsx } from 'clsx';
import { useState } from 'react';
import { copyToClipboard } from '@utils/client';
import styles from './CopyButton.module.css';
import type { FC } from 'react';

interface Props {
  text: string;
  className?: string;
  label?: string;
  invert?: boolean;
}

const ButtonCopy: FC<Props> = ({ text, className = '', label, invert }) => {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    copyToClipboard(text);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <button
      type="button"
      className={clsx([styles.button, { [`${styles.invert}`]: invert }, className])}
      onClick={handleClick}
      title={label}
    >
      {copied ? (
        <span className={styles.icon} aria-label="コピー">
          <CheckAIcon />
        </span>
      ) : label ? (
        label
      ) : (
        <span className={styles.icon} aria-label="コピー完了">
          <CopyIcon />
        </span>
      )}
    </button>
  );
};

export default ButtonCopy;
