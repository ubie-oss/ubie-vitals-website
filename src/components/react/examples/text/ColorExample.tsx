import { Text, Stack, Box } from '@ubie/ubie-ui';
import type { FC } from 'react';

const ColorExample: FC = () => (
  <Stack spacing="xs">
    <Text>Default (main)</Text>
    <Text color="main">Main</Text>
    <Text color="sub">Sub</Text>
    <Text color="disabled">Disabled</Text>
    <Text color="link">Link</Text>
    <Text color="linkSub">Link Sub</Text>
    <Text color="blue">Blue</Text>
    <Text color="blueDarken">Blue Darken</Text>
    <Text color="pink">Pink</Text>
    <Text color="pinkDarken">Pink Darken</Text>
    <Text color="orange">Orange</Text>
    <Text color="orangeDarken">Orange Darken</Text>
    <Text color="purple">Purple</Text>
    <Text color="purpleDarken">Purple Darken</Text>
    <Text color="green">Green</Text>
    <Text color="greenDarken">Green Darken</Text>
    <Text color="red">Red</Text>
    <Text color="redDarken">Red Darken</Text>
    <Text color="black">Black</Text>
    <Text color="blackDarken">Black Darken</Text>
    <Box py="xs" px="sm" backgroundColor="blueInverseDarken">
      <Text color="white">white</Text>
    </Box>
  </Stack>
);

export default ColorExample;
