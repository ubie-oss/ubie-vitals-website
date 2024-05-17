import { Center, Box } from '@ubie/ubie-ui';
import type { FC } from 'react';

export const AsBoxExample: FC = () => {
  return (
    <Center as={<Box pt="md" pr="lg" pb="md" pl="lg" backgroundColor="primary" radius="md" />} maxWidth="400px">
      <p>Some Text</p>
    </Center>
  );
};
