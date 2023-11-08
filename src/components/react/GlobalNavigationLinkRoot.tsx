import clsx from 'clsx';
import styles from './GlobalNavigationLinkRoot.module.css';
clsx;
import type { FC, ReactNode } from 'react';

interface Props {
  href: string;
  children: ReactNode;
  current?: boolean;
}

const GlobalNavigationLinkRoot: FC<Props> = ({ href, children, current = false }) => (
  <a href={href} className={clsx(styles.link, { [styles.current]: current })}>
    {children}
  </a>
);

export default GlobalNavigationLinkRoot;
