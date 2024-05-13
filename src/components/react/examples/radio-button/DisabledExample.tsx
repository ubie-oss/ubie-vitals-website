import { RadioButton, Stack } from '@ubie/ubie-ui';
import { useState, useCallback } from 'react';
import type { FC, ChangeEventHandler } from 'react';

const DisabledExample: FC = () => {
  const [selectedItem, setSelectedItem] = useState('checked');

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    setSelectedItem(event.target.value);
  }, []);

  return (
    <Stack spacing="xs">
      <RadioButton
        name="disabled"
        onChange={onChange}
        checked={selectedItem === 'checked'}
        value="checked"
        id="checked"
        disabled
      >
        Checked
      </RadioButton>

      <RadioButton
        name="disabled"
        onChange={onChange}
        checked={selectedItem === 'unchecked'}
        value="unchecked"
        id="unchecked"
        disabled
      >
        Unchecked
      </RadioButton>
    </Stack>
  );
};

export default DisabledExample;
