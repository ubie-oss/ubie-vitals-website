import { Heading, MessageModal, Stack, Text } from '@ubie/ubie-ui';
import { useState, type FC, type JSX } from 'react';
import iconNames from '@metadata/iconNames.json';
import styles from './IconWrapper.module.css';
import { Code } from '../Code';

interface Props {
  children: JSX.Element;
  index: number;
}

const IconWrapper: FC<Props> = ({ children, index }) => {
  const [open, setOpen] = useState(false);

  const toUbieIconsStatement = (iconName: string): string => {
    return `import { ${iconName} } from '@ubie/ubie-icons'
<${iconName} />`;
  };

  const toUbieUIStatement = (iconName: string): string => {
    return `<Icon icon="${iconName}" />`;
  };

  const name = iconNames[index];

  return (
    <>
      <button className={styles.wrapper} type="button" onClick={() => setOpen(true)}>
        <span className={styles.icon} aria-label={`アイコン ${name}`} role="img">
          {children}
        </span>
        <span className={styles.name}>{name}</span>
      </button>
      <MessageModal header="詳細情報" open={open} onClose={() => setOpen(false)}>
        <div className={styles.modalContent}>
          <span className={styles.modalIcon}>{children}</span>
          <Heading as="h3" size="md">
            {name}
          </Heading>
          <Stack spacing="md">
            <Text size="sm">Ubie UIを利用している場合はIconコンポーネントから利用します。</Text>
            <Code lang="tsx">{toUbieUIStatement(name)}</Code>
            <Text size="sm">Ubie UIを利用していない場合はUbie Iconsを直接インポートします。</Text>
            <Code lang="tsx">{toUbieIconsStatement(name)}</Code>
          </Stack>
        </div>
      </MessageModal>
    </>
  );
};

export default IconWrapper;
