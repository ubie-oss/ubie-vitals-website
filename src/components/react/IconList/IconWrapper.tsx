import iconNames from '@metadata/iconNames.json';
import styles from './IconWrapper.module.css';
import CopyButton from '../CopyButton';
import type { FC, JSX } from 'react';

interface Props {
  children: JSX.Element;
  index: number;
}

const convertToIconComponentName = (iconName: string) => {
  return `import { ${iconName} } from '@ubie/ubie-icons'`;
};

const IconWrapper: FC<Props> = ({ children, index }) => {
  const name = iconNames[index];

  if (!name) return null;

  const humanReadableName = name.split(/(?=[A-Z])/).join(' ');

  return (
    <div className={styles.wrapper}>
      <div className={styles.icon} aria-label={`アイコン ${humanReadableName}`} role="img">
        {children}
      </div>
      <p className={styles.name}>{humanReadableName}</p>
      <CopyButton label="React" text={convertToIconComponentName(name)} className={styles.copy} />
    </div>
  );
};

export default IconWrapper;
