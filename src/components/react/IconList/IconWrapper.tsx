import { Heading, MessageModal, Stack, Text } from '@ubie/ubie-ui';
import { useState, type FC, type JSX } from 'react';
import iconNames from '@metadata/iconNames.json';
import styles from './IconWrapper.module.css';
import { SimpleCode } from '../SimpleCode';

interface Props {
  children: JSX.Element;
  index: number;
}

const IconWrapper: FC<Props> = ({ children, index }) => {
  const [open, setOpen] = useState(false);

  const toUbieIconsImport = (iconName: string): string => {
    return `import { ${iconName} } from '@ubie/ubie-icons';`;
  };

  const toUbieIconsComponent = (iconName: string): string => {
    return `<${iconName} />`;
  };

  const toUbieUIImport = `import { Icon } from '@ubie/ubie-ui';`;

  const toUbieUIComponent = (iconName: string): string => {
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
      <MessageModal open={open} onClose={() => setOpen(false)}>
        <div className={styles.modalContent}>
          <span className={styles.modalIcon}>{children}</span>
          <Heading as="h3" size="md">
            {name}
          </Heading>
          <Stack spacing="md">
            <Text size="sm">Ubie UIを利用している場合：</Text>
            <SimpleCode>{toUbieUIImport}</SimpleCode>
            <SimpleCode>{toUbieUIComponent(name)}</SimpleCode>
            <Text size="sm">Ubie UIを利用していない場合：</Text>
            <SimpleCode>{toUbieIconsImport(name)}</SimpleCode>
            <SimpleCode>{toUbieIconsComponent(name)}</SimpleCode>
          </Stack>
        </div>
      </MessageModal>
    </>
  );
};

export default IconWrapper;
