import { Flex } from '@ubie/ubie-ui';
import { clsx } from 'clsx';
import { useState } from 'react';
import { Code } from '../Code.jsx';
import styles from '../WithCode/Codes.module.css';
import type { CodeObject } from './WithCode.js';
import type { FC } from 'react';

type Types = { codes: CodeObject[] };

export const Codes: FC<Types> = ({ codes }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className={styles.codesBlock}>
      <Flex spacing="xxs">
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
      </Flex>
      {codes.map(({ lang, code }, index) => (
        <div key={index} hidden={current !== index}>
          <Code lang={lang}>{code}</Code>
        </div>
      ))}
    </div>
  );
};
