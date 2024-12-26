import { Box, Text } from '@ubie/ubie-ui';
import type { FC } from 'react';

const AppearancesExample: FC = () => {
  return (
    <>
      <Box backgroundColor="blue" radius="md" pt="md" pb="md" pr="lg" pl="lg">
        <Text>backgroundColor: blue</Text>
      </Box>

      <Box backgroundColor="blueDarken" radius="md" pt="md" pb="md" pr="lg" pl="lg" mt="md">
        <Text>backgroundColor: blueDarken</Text>
      </Box>

      <Box backgroundColor="pink" radius="md" pt="md" pb="md" pr="lg" pl="lg" mt="md">
        <Text>backgroundColor: pink</Text>
      </Box>

      <Box backgroundColor="pinkDarken" radius="md" pt="md" pb="md" pr="lg" pl="lg" mt="md">
        <Text>backgroundColor: pinkDarken</Text>
      </Box>

      <Box backgroundColor="black" radius="md" pt="md" pb="md" pr="lg" pl="lg" mt="md">
        <Text>backgroundColor: black</Text>
      </Box>

      <Box border="black" radius="md" pt="md" pb="md" pr="lg" pl="lg" mt="md">
        <Text>border: black</Text>
      </Box>

      <Box border="blackThick" radius="md" pt="md" pb="md" pr="lg" pl="lg" mt="md">
        <Text>border: blackThick</Text>
      </Box>

      <Box border="blue" radius="md" pt="md" pb="md" pr="lg" pl="lg" mt="md">
        <Text>border: blue</Text>
      </Box>

      <Box border="blueThick" radius="md" pt="md" pb="md" pr="lg" pl="lg" mt="md">
        <Text>border: blueThcik</Text>
      </Box>
    </>
  );
};

export default AppearancesExample;
