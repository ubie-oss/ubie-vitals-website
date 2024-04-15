import { Center, Box } from '@ubie/ubie-ui';
import type { FC } from 'react';

export const Container: FC = () => {
  return (
    <Center maxWidth="400px">
      <Box border="gray" pt="md" pr="md" pb="md" pl="md">
        Rendered as a centered container.
      </Box>
    </Center>
  );
};
