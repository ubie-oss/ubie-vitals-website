import { Checkbox, Stack } from '@ubie/ubie-ui';
import type { FC } from 'react';

const SizeExample: FC = () => {
  return (
    <Stack spacing="xs">
      <Checkbox name="size" value="medium">
        Medium
      </Checkbox>
      <Checkbox name="size" value="small" size="small">
        Small
      </Checkbox>
    </Stack>
  );
};

export default SizeExample;
