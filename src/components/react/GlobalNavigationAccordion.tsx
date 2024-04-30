import clsx from 'clsx';
import { useState, useMemo, useId } from 'react';
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
  const detailId = useId();

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
    <div>
      <div className={style.summary}>
        <GlobalNavigationLinkRoot href={titleHref} current={isCurrent}>
          {title}
        </GlobalNavigationLinkRoot>
        <button
          className={style.toggle}
          type="button"
          onClick={onClickToggle}
          aria-expanded={openDetail}
          aria-controls={detailId}
        >
          <img
            className={clsx(style.toggleIcon, { [style.open]: openDetail })}
            src={TriDown.src}
            width={24}
            height={24}
            alt="サブメニュー"
          />
        </button>
      </div>
      <div
        id={detailId}
        // 本来であれば !openDetail で "until-found" を指定したい
        hidden={!openDetail}
      >
        {children}
      </div>
    </div>
  );
};

export default GlobalNavigationAccordion;
