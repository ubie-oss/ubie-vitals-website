import { Flex, Box } from '@ubie/ubie-ui';
import type { FC } from 'react';

export const HorizontalExample: FC = () => {
  return (
    <Flex spacing="md">
      <Box radius="sm" backgroundColor="blueDarken" pt="xxs" pb="xxs" pr="sm" pl="sm">
        1
      </Box>
      <Box radius="sm" backgroundColor="blueDarken" pt="xxs" pb="xxs" pr="sm" pl="sm">
        2
      </Box>
      <Box radius="sm" backgroundColor="blueDarken" pt="xxs" pb="xxs" pr="sm" pl="sm">
        3
      </Box>
      <Box radius="sm" backgroundColor="blueDarken" pt="xxs" pb="xxs" pr="sm" pl="sm">
        4
      </Box>
    </Flex>
  );
};
