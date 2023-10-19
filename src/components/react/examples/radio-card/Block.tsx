import { RadioCard, Stack } from '@ubie/ubie-ui';
import { useState, useCallback } from 'react';
import type { FC, ChangeEventHandler } from 'react';

const Block: FC = () => {
  const options = ['option1', 'option2', 'option3'];

  const [value, setValue] = useState<string>('option1');

  const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>((event) => {
    setValue(event.target.value);
  }, []);

  return (
    <Stack spacing="sm">
      {options.map((option) => (
        <RadioCard block name="block" key={option} checked={value === option} value={option} onChange={onChange}>
          {option}
        </RadioCard>
      ))}
    </Stack>
  );
};

export default Block;
