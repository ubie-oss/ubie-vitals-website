import { Stack } from '@ubie/ubie-ui';
import { type FC, type ReactNode } from 'react';
import { Codes } from './Codes';
import styles from './WithCode.module.css';
import SyntaxHighlighter from '../SyntaxHighlighter';

type Lang = string;

export type CodeObject = {
  lang: Lang;
  code: string;
  filename?: string;
};

type Props = {
  lang: Lang;
  code: string | CodeObject[];
  children: ReactNode;
};

export const WithCode: FC<Props> = ({ lang = 'jsx', code, children }) => (
  <Stack spacing="sm" alignItems="normal" as="figure">
    <div className={styles.renderBlock}>{children}</div>

    {Array.isArray(code) ? <Codes codes={code} /> : <SyntaxHighlighter lang={lang}>{code}</SyntaxHighlighter>}
  </Stack>
);
