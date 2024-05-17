import { Heading, Stack } from '@ubie/ubie-ui';
import type { FC } from 'react';

export const WeightExample: FC = () => {
  return (
    <Stack spacing="md">
      <Heading as="h1" color="main" size="md">
        h1 bold
      </Heading>
      <Heading as="h1" color="main" size="md" bold={false}>
        h1 normal
      </Heading>
    </Stack>
  );
};
