import { ButtonCard, Stack } from '@ubie/ubie-ui';
import type { FC } from 'react';

export const DefaultExample: FC = () => {
  return (
    <Stack spacing="sm">
      <ButtonCard>自分</ButtonCard>
      <ButtonCard>自分以外</ButtonCard>
    </Stack>
  );
};
