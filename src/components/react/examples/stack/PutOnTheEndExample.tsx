import { Stack } from '@ubie/ubie-ui';
import type { FC } from 'react';

const PutOnTheEndExample: FC = () => {
  return (
    <Stack spacing="md" alignItems="flex-end">
      <p style={{ margin: 0 }}>テスト</p>
      <p style={{ margin: 0 }}>テスト</p>
      <p style={{ margin: 0 }}>テスト</p>
      <p style={{ margin: 0 }}>テスト</p>
    </Stack>
  );
};

export default PutOnTheEndExample;
