import { Checkbox, Stack } from '@ubie/ubie-ui';
import type { FC } from 'react';

const DisabledExample: FC = () => {
  return (
    <Stack spacing="xs">
      <Checkbox name="disabled" value="checked" checked disabled>
        Checked
      </Checkbox>

      <Checkbox name="disabled" value="unchecked" disabled>
        Unchecked
      </Checkbox>
    </Stack>
  );
};

export default DisabledExample;
