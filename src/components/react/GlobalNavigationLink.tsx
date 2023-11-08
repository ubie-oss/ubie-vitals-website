import clsx from 'clsx';
import style from './GlobalNavigationLink.module.css';
import type { FC, ReactNode } from 'react';

interface Props {
  href: string;
  children: ReactNode;
  current?: boolean;
}

const GlobalNavigationLink: FC<Props> = ({ href, children, current = false }) => (
  <a className={clsx(style.link, { [style.current]: current })} href={href}>
    {children}
  </a>
);

export default GlobalNavigationLink;
