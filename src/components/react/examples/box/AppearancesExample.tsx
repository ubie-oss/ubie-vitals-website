import { Box, Text } from '@ubie/ubie-ui';
import type { FC } from 'react';

const AppearancesExample: FC = () => {
  return (
    <>
      <Box backgroundColor="primary" radius="md" pt="md" pb="md" pr="lg" pl="lg">
        <Text>backgroundColor: primary</Text>
      </Box>

      <Box backgroundColor="primaryDarken" radius="md" pt="md" pb="md" pr="lg" pl="lg" mt="md">
        <Text>backgroundColor: primaryDarken</Text>
      </Box>

      <Box backgroundColor="accent" radius="md" pt="md" pb="md" pr="lg" pl="lg" mt="md">
        <Text>backgroundColor: accent</Text>
      </Box>

      <Box backgroundColor="accentDarken" radius="md" pt="md" pb="md" pr="lg" pl="lg" mt="md">
        <Text>backgroundColor: accentDarken</Text>
      </Box>

      <Box backgroundColor="gray" radius="md" pt="md" pb="md" pr="lg" pl="lg" mt="md">
        <Text>backgroundColor: gray</Text>
      </Box>

      <Box border="gray" radius="md" pt="md" pb="md" pr="lg" pl="lg" mt="md">
        <Text>border: gray</Text>
      </Box>

      <Box border="grayThick" radius="md" pt="md" pb="md" pr="lg" pl="lg" mt="md">
        <Text>border: grayThick</Text>
      </Box>

      <Box border="primary" radius="md" pt="md" pb="md" pr="lg" pl="lg" mt="md">
        <Text>border: primary</Text>
      </Box>

      <Box border="primaryThick" radius="md" pt="md" pb="md" pr="lg" pl="lg" mt="md">
        <Text>border: primaryThcik</Text>
      </Box>
    </>
  );
};

export default AppearancesExample;
