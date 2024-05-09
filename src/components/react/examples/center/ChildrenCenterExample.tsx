import { Center, Box } from '@ubie/ubie-ui';
import type { FC } from 'react';

const ChildrenCenterExample: FC = () => {
  return (
    <>
      <p>&lt;Center&gt; is 100% width</p>

      <Center childrenCenter>
        <Box backgroundColor="gray" radius="md" pt="md" pr="md" pb="md" pl="md">
          <p>
            Child elements is centered.
            <br />
            Text is left-aligned(by inheritance).
          </p>
        </Box>
      </Center>
    </>
  );
};

export default ChildrenCenterExample;
