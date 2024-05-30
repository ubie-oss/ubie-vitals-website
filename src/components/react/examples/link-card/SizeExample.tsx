import { HospitalIcon } from '@ubie/ubie-icons';
import { LinkCard, Stack } from '@ubie/ubie-ui';
import type { FC } from 'react';

export const SizeExample: FC = () => {
  return (
    <Stack spacing="md">
      <LinkCard title="見出しテキスト" href="https://vitals.ubie.life/" size="small" />
      <LinkCard title="見出しテキスト" href="https://vitals.ubie.life/" icon={HospitalIcon} size="small" />
      <LinkCard
        title="見出しテキスト"
        href="https://vitals.ubie.life/"
        icon={HospitalIcon}
        description="これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。"
        size="small"
      />
    </Stack>
  );
};
