import CopyButton from '@components/react/CopyButton';
import * as icons from '@ubie/ubie-icons';
import styles from './index.module.css';
import type { FC } from 'react';

const iconArray = Object.values(icons);

const splitPascalCase = (name: string): string[] => {
  const result = name.match(/[A-Z][a-z]+|[A-Z]/g);
  if (result === null) {
    return [];
  }
  return result;
};

const IconName: FC<{ name: string }> = ({ name }) => {
  return splitPascalCase(name).map((word, index) => (
    <span className={styles.word} key={`${word}-${index}`}>
      {word}
    </span>
  ));
};

const deletePrefix = (name: string) => name.replace('Svg', '');
const deleteSuffix = (name: string) => name.replace('Icon', '');

const convertToDisplayName = (componentName: string) => {
  return deleteSuffix(deletePrefix(componentName));
};

const convertToIconComponentName = (componentName: string) => {
  return deletePrefix(componentName);
};

const IconList: FC = () => (
  <ul className={styles.list}>
    {iconArray.map((Icon, index) => (
      <li className={styles.item} key={`${Icon.name}-${index}`}>
        <div className={styles.icon} aria-label={`${Icon.name}のアイコン`}>
          <Icon key={Icon.name} />
        </div>
        <p className={styles.name}>{<IconName name={convertToDisplayName(Icon.name)}></IconName>}</p>
        <CopyButton text={convertToIconComponentName(Icon.name)} className={styles.copy} />
      </li>
    ))}
  </ul>
);

export default IconList;
