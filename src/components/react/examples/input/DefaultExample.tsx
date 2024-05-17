import { Input, Stack, Label } from '@ubie/ubie-ui';
import { useId } from 'react';
import type { FC } from 'react';

const Default: FC = () => {
  const id = useId();

  return (
    <Stack spacing="xs">
      <Label htmlFor={id} showRequiredLabel>
        Field
      </Label>
      <Input id={id} value="value" />
    </Stack>
  );
};

export default Default;
