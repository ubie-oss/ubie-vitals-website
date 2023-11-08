import { useStore } from '@nanostores/react';
import clsx from 'clsx';
import { $isMobileGlobalNavigationOpen } from '@store/navigation';
import GlobalNavigation from './GlobalNavigation';
import styles from './WithGlobalNavigation.module.css';
import type { PostData } from '@types';
import type { FC, ReactNode } from 'react';

interface Props {
  allComponentPostData: PostData[];
  currentPath: string;
  children: ReactNode;
  globalNavigationId: string;
}

const WithGlobalNavigation: FC<Props> = ({ allComponentPostData, currentPath, children, globalNavigationId }) => {
  const isMobileGlobalNavigationOpen = useStore($isMobileGlobalNavigationOpen);

  return (
    <div className={styles.wrapper}>
      <div id={globalNavigationId} className={clsx(styles.menu, { [styles.mobileOpen]: isMobileGlobalNavigationOpen })}>
        <a className={styles.logoWrapper} href="/">
          <img
            className={styles.logo}
            src="/assets/images/ubie-vitals-logo.svg"
            alt="Logo: Ubie Vitals"
            width={1640}
            height={226}
          />
        </a>

        <GlobalNavigation allComponentPostData={allComponentPostData} currentPath={currentPath} />
      </div>
      <div className={styles.contents}>{children}</div>
    </div>
  );
};

export default WithGlobalNavigation;
