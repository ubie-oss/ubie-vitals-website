import { Box, Stack } from '@ubie/ubie-ui';
import { Color } from '@ubie/ubie-ui/font';
import type { FC } from 'react';

export const ColorVariationExample: FC = () => {
  return (
    <Stack spacing="xs">
      <Color>Default (main)</Color>
      <Color color="main">Main</Color>
      <Color color="sub">Sub</Color>
      <Color color="disabled">Disabled</Color>
      <Color color="link">Link</Color>
      <Color color="linkSub">Link Sub</Color>
      <Color color="blue">Blue</Color>
      <Color color="blueDarken">Blue Darken</Color>
      <Color color="pink">Pink</Color>
      <Color color="pinkDarken">Pink Darken</Color>
      <Color color="orange">Orange</Color>
      <Color color="orangeDarken">Orange Darken</Color>
      <Color color="purple">Purple</Color>
      <Color color="purpleDarken">Purple Darken</Color>
      <Color color="green">Green</Color>
      <Color color="greenDarken">Green Darken</Color>
      <Color color="red">Red</Color>
      <Color color="redDarken">Red Darken</Color>
      <Color color="black">Black</Color>
      <Color color="blackDarken">Black Darken</Color>
      <Box py="xs" px="sm" backgroundColor="blueInverseDarken">
        <Color color="white">white</Color>
      </Box>
    </Stack>
  );
};
