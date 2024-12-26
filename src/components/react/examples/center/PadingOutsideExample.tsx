import { Center, Box } from '@ubie/ubie-ui';
import type { FC } from 'react';

const PadingOutsideExample: FC = () => {
  return (
    <Center pt="md" pl="xl" pb="md" pr="xl">
      <Box border="black" pt="md" pr="md" pb="md" pl="md">
        Narrow the screen.
        <br />
        There will be a gap on both sides of the box.
        <br />
        max-width is not used.
      </Box>
    </Center>
  );
};

export default PadingOutsideExample;
