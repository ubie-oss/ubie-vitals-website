import { useStore } from '@nanostores/react';
import { $isMobileGlobalNavigationOpen } from '@store/navigation';
import clsx from 'clsx';
import FocusTrap from 'focus-trap-react';
import styles from './GlobalNavigation.module.css';
import type { PostData } from '@types';
import type { FC } from 'react';

interface Props {
  currentPath: string;
  allComponentPostData: PostData[];
}

const GlobalNavigation: FC<Props> = ({ currentPath, allComponentPostData }) => {
  const isCurrent = (path: string): boolean => {
    return currentPath.endsWith(path);
  };

  const onClickClose = () => {
    $isMobileGlobalNavigationOpen.set(false);
  };

  const isMobileGlobalNavigationOpen = useStore($isMobileGlobalNavigationOpen);

  return (
    <nav className={styles.nav}>
      <FocusTrap active={isMobileGlobalNavigationOpen}>
        <div>
          <div className={styles.closeButtonWrapper}>
            <button className={styles.closeButton} type="button" onClick={onClickClose} aria-label="メニューを閉じる">
              <img className={styles.closeButtonImage} src="/assets/images/icon-close-a.svg" alt="" />
            </button>
          </div>
          <ul>
            <li>
              <a className={clsx(styles.link, { [styles.current]: isCurrent('/principles') })} href="/principles">
                Principles
              </a>
            </li>
            <li className={styles.category}>
              <span className={styles.categoryHeading}>TOKENS</span>
              <ul>
                <li>
                  <a
                    className={clsx(styles.link, { [styles.current]: isCurrent('/tokens/typography') })}
                    href="/tokens/typography"
                  >
                    Typography
                  </a>
                </li>
                <li>
                  <a
                    className={clsx(styles.link, { [styles.current]: isCurrent('/tokens/color/semantic') })}
                    href="/tokens/color/semantic"
                  >
                    Semantic Color
                  </a>
                </li>
                <li>
                  <a
                    className={clsx(styles.link, { [styles.current]: isCurrent('/tokens/color/primitive') })}
                    href="/tokens/color/primitive"
                  >
                    Primitive Color
                  </a>
                </li>
                <li>
                  <a
                    className={clsx(styles.link, { [styles.current]: isCurrent('/tokens/spacing') })}
                    href="/tokens/spacing"
                  >
                    Spacing
                  </a>
                </li>
                <li>
                  <a
                    className={clsx(styles.link, { [styles.current]: isCurrent('/tokens/radius') })}
                    href="/tokens/radius"
                  >
                    Radius
                  </a>
                </li>
                <li>
                  <a
                    className={clsx(styles.link, { [styles.current]: isCurrent('/tokens/for-developers') })}
                    href="/tokens/for-developers"
                  >
                    For Developers
                  </a>
                </li>
              </ul>
            </li>
            <li className={styles.category}>
              <span className={styles.categoryHeading}>ELEMENTS</span>
              <ul>
                <li>
                  <a
                    className={clsx(styles.link, { [styles.current]: isCurrent('/elements/icons') })}
                    href="/elements/icons"
                  >
                    Icons
                  </a>
                </li>
              </ul>
            </li>
            <li className={styles.category}>
              <span className={styles.categoryHeading}>COMPONENTS</span>
              <ul>
                {allComponentPostData.map((postData) => (
                  <li key={postData.url}>
                    <a className={clsx(styles.link, { [styles.current]: isCurrent(postData.url) })} href={postData.url}>
                      {postData.title}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </FocusTrap>
    </nav>
  );
};

export default GlobalNavigation;

<style></style>;
