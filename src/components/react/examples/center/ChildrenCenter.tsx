import { Center, Box } from '@ubie/ubie-ui';
import type { FC } from 'react';

const ChildrenCenter: FC = () => {
  return (
    <Center childrenCenter>
      <Box backgroundColor="gray" radius="md" pt="md" pr="md" pb="md" pl="md">
        Centered Child
      </Box>
    </Center>
  );
};

export default ChildrenCenter;
