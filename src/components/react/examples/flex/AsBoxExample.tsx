import { Flex, Box, Text } from '@ubie/ubie-ui';
import type { FC } from 'react';

export const AsBoxExample: FC = () => {
  return (
    <Flex
      spacing="md"
      as={<Box ml="md" mr="md" pt="md" pr="lg" pb="md" pl="lg" backgroundColor="primary" radius="md" />}
    >
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
    </Flex>
  );
};
