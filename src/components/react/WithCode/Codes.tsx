import { Stack } from '@ubie/ubie-ui';
import { clsx } from 'clsx';
import { useState } from 'react';
import styles from './Codes.module.css';
import CopyButton from '../CopyButton';
import SyntaxHighlighter from '../SyntaxHighlighter';
import type { CodeObject } from './WithCode';
import type { FC } from 'react';

type Types = { codes: CodeObject[] };

export const Codes: FC<Types> = ({ codes }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className={styles.codesBlock}>
      <Stack direction="row" spacing="xxs">
        {codes.map(({ lang, filename }, index) => (
          <button
            key={index}
            className={clsx(styles.tabButton, { [styles.current]: current === index })}
            type="button"
            onClick={() => {
              setCurrent(index);
            }}
          >
            {filename || lang}
          </button>
        ))}
      </Stack>
      {codes.map(({ lang, code }, index) => (
        <div key={index} hidden={current !== index}>
          <span className={styles.copy}>
            <CopyButton text={code} />
          </span>
          <SyntaxHighlighter lang={lang}>{code}</SyntaxHighlighter>
        </div>
      ))}
    </div>
  );
};
