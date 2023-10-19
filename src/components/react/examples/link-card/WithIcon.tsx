import { MedicalFormIcon } from '@ubie/ubie-icons';
import { LinkCard } from '@ubie/ubie-ui';
import type { FC } from 'react';

const WithIcon: FC = () => {
  return (
    <LinkCard
      title="タイトル"
      href="/"
      icon={MedicalFormIcon}
      description="これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。"
    />
  );
};

export default WithIcon;
