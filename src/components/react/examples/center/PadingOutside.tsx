import { Center, Box } from '@ubie/ubie-ui';
import type { FC } from 'react';

const PadingOutside: FC = () => {
  return (
    <Center maxWidth="400px" pt="md" pl="xl" pb="md" pr="xl">
      <Box border="gray" pt="md" pr="md" pb="md" pl="md">
        Narrow the screen.
        <br />
        There will be a gap on both sides of the box.
      </Box>
    </Center>
  );
};

export default PadingOutside;
