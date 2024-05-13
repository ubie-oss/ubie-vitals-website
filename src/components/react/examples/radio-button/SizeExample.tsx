import { RadioButton, Stack } from '@ubie/ubie-ui';
import { useState, useCallback } from 'react';
import type { FC, ChangeEventHandler } from 'react';

const SizeExample: FC = () => {
  const [selectedItem, setSelectedItem] = useState('medium');

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    setSelectedItem(event.target.value);
  }, []);

  return (
    <Stack spacing="xs">
      <RadioButton onChange={onChange} checked={selectedItem === 'medium'} name="size" value="medium" id="medium">
        Medium
      </RadioButton>
      <RadioButton
        onChange={onChange}
        checked={selectedItem === 'small'}
        name="size"
        value="small"
        id="small"
        size="small"
      >
        Small
      </RadioButton>
    </Stack>
  );
};

export default SizeExample;
