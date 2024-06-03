import { Text, Box } from '@ubie/ubie-ui';
import clsx from 'clsx';
import { useState, useRef, useCallback, useEffect } from 'react';
import iconNames from '@metadata/iconNames.json';
import styles from './IconWrapper.module.css';
import CopyButton from '../CopyButton';
import type { FC, JSX, FocusEvent } from 'react';

interface Props {
  children: JSX.Element;
  index: number;
}

const toUbieIconsStatement = (iconName: string): string => {
  return `import { ${iconName} } from '@ubie/ubie-icons'`;
};

const toUbieUIStatement = (iconName: string): string => {
  return `<Icon icon="${iconName}" />`;
};

const IconWrapper: FC<Props> = ({ children, index }) => {
  const name = iconNames[index];

  if (!name) return null;

  const humanReadableName = name.split(/(?=[A-Z])/).join(' ');

  const [showCopyBubble, setShowCopyBubble] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setShowCopyBubble(true);
  }, []);
  const handleMouseLeave = useCallback(() => {
    setShowCopyBubble(false);
  }, []);

  const handleFocus = useCallback(() => {
    setShowCopyBubble(true);
  }, []);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const handleBlur = (e: FocusEvent) => {
    if (wrapperRef.current == null) return;

    if (!wrapperRef.current.contains(e.relatedTarget as Node)) {
      setShowCopyBubble(false);
    }
  };

  const handleKeyDownEsc = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setShowCopyBubble(false);
    }
  }, []);
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDownEsc);

    return () => {
      window.removeEventListener('keydown', handleKeyDownEsc);
    };
  }, []);

  return (
    <>
      {/* eslint-disable jsx-a11y/no-noninteractive-tabindex */}
      <div
        className={styles.wrapper}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        tabIndex={0}
        ref={wrapperRef}
      >
        {/* eslint-enable */}
        <div className={styles.wrapperInner}>
          <div className={styles.icon} aria-label={`アイコン ${humanReadableName}`} role="img">
            {children}
          </div>
          <p className={styles.name}>{humanReadableName}</p>
        </div>

        <div className={clsx(styles.copyOuter, showCopyBubble && styles.show)}>
          <div className={styles.copy}>
            <div className={styles.copyInner}>
              <Box pt="xxs" pb="xxs">
                <Text type="note" size="lg" color="main" bold textAlign="center">
                  copy
                </Text>
              </Box>
              <CopyButton label="Ubie UI" text={toUbieUIStatement(name)} block />
              <CopyButton label="Ubie Icons" text={toUbieIconsStatement(name)} block />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IconWrapper;
