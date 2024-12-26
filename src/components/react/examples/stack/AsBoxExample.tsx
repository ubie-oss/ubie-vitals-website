import { Stack, Box, Text } from '@ubie/ubie-ui';
import type { FC } from 'react';

export const AsBoxExample: FC = () => {
  return (
    <Stack
      spacing="md"
      as={<Box ml="md" mr="md" pt="md" pr="lg" pb="md" pl="lg" backgroundColor="blue" radius="md" />}
    >
      <Text>Some Text</Text>
      <Text>Some Text</Text>
      <Text>Some Text</Text>
      <Text>Some Text</Text>
    </Stack>
  );
};
