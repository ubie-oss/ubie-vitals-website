import { LinkCard, Stack } from '@ubie/ubie-ui';
import type { FC } from 'react';

const Default: FC = () => {
  return (
    <Stack spacing="md">
      <LinkCard
        title="タイトル"
        description="これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。"
        href="/"
      />
      <LinkCard title="タイトル" href="/" />
    </Stack>
  );
};

export default Default;
