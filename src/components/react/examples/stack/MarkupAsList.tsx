import { Stack } from '@ubie/ubie-ui';
import type { FC } from 'react';

const MarkupAsList: FC = () => {
  return (
    <Stack spacing="md" as="ul">
      <li>テスト</li>
      <li>テスト</li>
      <li>テスト</li>
      <li>テスト</li>
    </Stack>
  );
};

export default MarkupAsList;
