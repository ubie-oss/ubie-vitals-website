import { Stack } from '@ubie/ubie-ui';
import type { FC } from 'react';

const Centralized: FC = () => {
  return (
    <Stack spacing="md" direction="row" justifyContent="center" alignItems="center">
      <span>
        Words
        <br />
        crowded
      </span>
      <span>in</span>
      <span>
        simply
        <br />
        dummy
        <br />
        text
      </span>
    </Stack>
  );
};

export default Centralized;
