import { Stack } from '@ubie/ubie-ui';
import type { FC } from 'react';

const Horizontal: FC = () => {
  return (
    <Stack direction="row" spacing="md">
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
    </Stack>
  );
};

export default Horizontal;
