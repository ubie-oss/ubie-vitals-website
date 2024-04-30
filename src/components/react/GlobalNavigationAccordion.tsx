import clsx from 'clsx';
import { useState, useMemo } from 'react';
import TriDown from '@icons/icon-tri-down.svg';
import style from './GlobalNavigationAccordion.module.css';
import GlobalNavigationLinkRoot from './GlobalNavigationLinkRoot';
import type { FC, ReactNode, MouseEvent } from 'react';

interface Props {
  title: string;
  titleHref: string;
  currentPath: string;
  children: ReactNode;
}

// 末尾のスラッシュを削除し、正規化する
const normalizePath = (path: string): string => {
  return path.replace(/\/$/, '');
};

const GlobalNavigationAccordion: FC<Props> = ({ currentPath, title, titleHref, children }) => {
  const [openDetail, setOpenDetail] = useState(() => {
    return currentPath.includes(titleHref);
  });

  // openComponentsの状態を反転させる。また、クリックイベントをとめる
  const onClickToggle = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setOpenDetail(!openDetail);
  };

  const isCurrent = useMemo<boolean>(() => {
    return normalizePath(currentPath) === normalizePath(titleHref);
  }, [currentPath, titleHref]);

  return (
    <details open={openDetail}>
      <summary className={style.summary}>
        <GlobalNavigationLinkRoot href={titleHref} current={isCurrent}>
          {title}
          <button className={style.toggle} type="button" onClick={onClickToggle}>
            <img
              className={clsx(style.toggleIcon, { [style.open]: openDetail })}
              src={TriDown.src}
              width={24}
              height={24}
              alt=""
            />
          </button>
        </GlobalNavigationLinkRoot>
      </summary>

      {children}
    </details>
  );
};

export default GlobalNavigationAccordion;
