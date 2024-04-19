import { useStore } from '@nanostores/react';
import FocusTrap from 'focus-trap-react';
import { $isMobileGlobalNavigationOpen } from '@store/navigation';
import styles from './GlobalNavigation.module.css';
import GlobalNavigationAccordion from './GlobalNavigationAccordion.tsx';
import GlobalNavigationLink from './GlobalNavigationLink';
import GlobalNavigationLinkRoot from './GlobalNavigationLinkRoot';
import type { PostData } from '@types';
import type { FC } from 'react';

interface Props {
  currentPath: string;
  allComponentPostData: PostData[];
}

const GlobalNavigation: FC<Props> = ({ currentPath, allComponentPostData }) => {
  const isCurrent = (path: string): boolean => {
    // In the production build, trailing "/" is added to the end of the string. Remove "/" to unify formatting.
    return currentPath.replace(/\/$/, '') === path;
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
          <ul className={styles.linkList}>
            <li>
              <GlobalNavigationLinkRoot current={isCurrent('/principles')} href="/principles">
                Principles
              </GlobalNavigationLinkRoot>
            </li>

            <GlobalNavigationAccordion title="Tokens" titleHref="/tokens" currentPath={currentPath}>
              <ul>
                <li>
                  <GlobalNavigationLink current={isCurrent('/tokens/typography')} href="/tokens/typography">
                    Typography
                  </GlobalNavigationLink>
                </li>
                <li>
                  <GlobalNavigationLink current={isCurrent('/tokens/color/semantic')} href="/tokens/color/semantic">
                    Semantic Color
                  </GlobalNavigationLink>
                </li>
                <li>
                  <GlobalNavigationLink current={isCurrent('/tokens/color/primitive')} href="/tokens/color/primitive">
                    Primitive Color
                  </GlobalNavigationLink>
                </li>
                <li>
                  <GlobalNavigationLink current={isCurrent('/tokens/spacing')} href="/tokens/spacing">
                    Spacing
                  </GlobalNavigationLink>
                </li>
                <li>
                  <GlobalNavigationLink current={isCurrent('/tokens/radius')} href="/tokens/radius">
                    Radius
                  </GlobalNavigationLink>
                </li>
                <li>
                  <GlobalNavigationLink current={isCurrent('/tokens/for-developers')} href="/tokens/for-developers">
                    For Developers
                  </GlobalNavigationLink>
                </li>
              </ul>
            </GlobalNavigationAccordion>

            <GlobalNavigationAccordion title="Layouts" titleHref="/layouts" currentPath={currentPath}>
              <ul>
                <li>
                  <GlobalNavigationLink current={isCurrent('/layouts/form')} href="/layouts/form">
                    Form
                  </GlobalNavigationLink>
                </li>
              </ul>
            </GlobalNavigationAccordion>

            <GlobalNavigationAccordion title="Components" titleHref="/components" currentPath={currentPath}>
              <ul>
                {allComponentPostData.map((postData) => (
                  <li key={postData.url}>
                    <GlobalNavigationLink href={postData.url} current={isCurrent(postData.url)}>
                      {postData.title}
                    </GlobalNavigationLink>
                  </li>
                ))}
              </ul>
            </GlobalNavigationAccordion>

            <li>
              <GlobalNavigationLinkRoot href="/elements/icons" current={isCurrent('/elements/icons')}>
                Icons
              </GlobalNavigationLinkRoot>
            </li>
            <li>
              <GlobalNavigationLinkRoot href="/rules/ux-writing" current={isCurrent('/rules/ux-writing')}>
                UX Writing Rule
              </GlobalNavigationLinkRoot>
            </li>
          </ul>
        </div>
      </FocusTrap>
    </nav>
  );
};

export default GlobalNavigation;

<style></style>;
