
import { Box , Stack } from '@ubie/ubie-ui';
import { Color } from '@ubie/ubie-ui/font';
import type { FC } from 'react';

export const ColorVariationExample: FC = () => {
  return (
      <Stack spacing="md">
        <Color>default(main)</Color>
        <Color color="main">main</Color>
        <Color color="sub">sub</Color>
        <Color color="primary">primary</Color>
        <Color color="accent">accent</Color>
        <Color color="alert">alert</Color>
        <Color color="disabled">disabled</Color>
        <Color color="link">link</Color>
        <Color color="linkSub">linkSub</Color>
        <Box pt="sm" pr="sm" pb="sm" pl="sm" backgroundColor="primaryDarken">
          <Color color="white">white</Color>
        </Box>
      </Stack>
  );
};
