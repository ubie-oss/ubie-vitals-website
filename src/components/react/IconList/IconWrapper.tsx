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

const splitUpperCase = (str: string) => {
  return str.split(/(?=[A-Z])/);
};

const IconWrapper: FC<Props> = ({ children, index }) => {
  const name = iconNames[index];

  if (!name) return null;

  return (
    <>
      <div className={styles.icon} aria-label={`アイコン ${name}`} role="img">
        {children}
      </div>
      <p className={styles.name}>
        {splitUpperCase(name).map((str, index) => (
          <span className={styles.word} key={index}>
            {str}
          </span>
        ))}
      </p>
      <CopyButton label="React" text={convertToIconComponentName(name)} className={styles.copy} />
    </>
  );
};

export default IconWrapper;
