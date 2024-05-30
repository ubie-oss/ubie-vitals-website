import { Text, Stack } from '@ubie/ubie-ui';
import type { FC } from 'react';

export const TextAlignExample: FC = () => {
  return (
    <Stack spacing="md">
      <Text textAlign="left">Left</Text>
      <Text textAlign="center">Center</Text>
      <Text textAlign="right">Right</Text>
      <div style={{ textAlign: 'center' }}>
        <Text textAlign="center">Inherit(undefined)</Text>
      </div>
    </Stack>
  );
};
