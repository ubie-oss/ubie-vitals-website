import { Text, Stack } from '@ubie/ubie-ui';
import type { FC } from 'react';

const Color: FC = () => (
  <Stack spacing="md" direction="row">
    <Text color="main">main</Text>
    <Text color="sub">sub</Text>
    <Text color="link">link</Text>
    <Text color="linkSub">linkSub</Text>
    <Text color="disabled">disabled</Text>
    <Text color="primary">primary</Text>
    <Text color="accent">accent</Text>
    <Text color="alert">alert</Text>
    <span style={{ background: 'black', padding: '0 0.5em' }}>
      <Text color="white">white</Text>
    </span>
  </Stack>
);

export default Color;
