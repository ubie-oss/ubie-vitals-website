import { copyToClipboard } from '@utils/client';
import { clsx } from 'clsx';
import { useState } from 'react';
import styles from './CopyButton.module.css';
import type { FC } from 'react';

interface Props {
  text: string;
  className?: string;
  label?: string;
}

const ButtonCopy: FC<Props> = ({ text, className = '', label = 'COPY' }) => {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    copyToClipboard(text);
    setCopied(true);
  };

  return (
    <button type="button" className={clsx(styles.button, className)} onClick={handleClick}>
      {copied ? 'COPIED!' : label}
    </button>
  );
};

export default ButtonCopy;
