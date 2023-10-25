import { MedicalFormIcon } from '@ubie/ubie-icons';
import { LinkCard } from '@ubie/ubie-ui';
import type { FC } from 'react';

const Default: FC = () => {
  return (
    <>
      <LinkCard
        title="タイトル"
        href="/"
        description="これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。"
        icon={MedicalFormIcon}
      />
      <div style={{ marginTop: '1rem' }}>
        <LinkCard
          title="タイトル"
          href="/"
          description="これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。"
        />
      </div>
    </>
  );
};

export default Default;
