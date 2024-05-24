import { Bold } from '@ubie/ubie-ui/font';
import { Stack } from '@ubie/ubie-ui';
import type { FC } from 'react';

export const AsVariationsExample: FC = () => {
  return (
      <Stack spacing="md">
        <Bold>default(span)</Bold>
        <Bold as="span">span</Bold>
        <Bold as="b">b</Bold>
        <Bold as="strong">strong</Bold>
        <Bold as="em">em</Bold>
        <Bold as="i">i</Bold>
      </Stack>
  );
};
