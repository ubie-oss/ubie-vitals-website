import { Center, Box } from '@ubie/ubie-ui';
import type { FC } from 'react';

const TextCenter: FC = () => {
  return (
    <Center maxWidth="400px" textCenter>
      <Box border="gray" pt="md" pr="md" pb="md" pl="md">
        Center
      </Box>
    </Center>
  );
};

export default TextCenter;
