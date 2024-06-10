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
  block?: boolean;
}

const ButtonCopy: FC<Props> = ({ text, className = '', label, invert, block }) => {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    copyToClipboard(text);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <>
      <button
        type="button"
        className={clsx(
          styles.button,
          invert !== undefined ? styles.invert : null,
          block !== undefined ? styles.block : null,
          className,
        )}
        onClick={handleClick}
        title={label}
        aria-label={label ? `コピー: ${label}` : 'コピー'}
      >
        {copied ? (
          <span className={styles.icon}>
            <CheckAIcon />
          </span>
        ) : label ? (
          label
        ) : (
          <span className={styles.icon}>
            <CopyIcon />
          </span>
        )}
      </button>
      {copied ? (
        <div className={clsx('visuallyHidden')} role="status">
          コピー完了
        </div>
      ) : null}
    </>
  );
};

export default ButtonCopy;
