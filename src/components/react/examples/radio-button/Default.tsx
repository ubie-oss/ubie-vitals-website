import { RadioButton, Stack } from '@ubie/ubie-ui';
import { useState, useCallback } from 'react';
import type { FC, ChangeEventHandler } from 'react';

const options = ['option1', 'option2', 'option3'];

const Default: FC = () => {
  const [selectedItem, setSelectedItem] = useState(options[0]);

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    setSelectedItem(event.target.value);
  }, []);

  return (
    <Stack spacing="xs">
      {options.map((option) => (
        <RadioButton
          key={option}
          value={option}
          id={option}
          onChange={onChange}
          checked={selectedItem === option}
          name="deafult"
        >
          {option}
        </RadioButton>
      ))}

      <dl>
        <dt>Values</dt>
        <dd>{selectedItem}</dd>
      </dl>
    </Stack>
  );
};

export default Default;
