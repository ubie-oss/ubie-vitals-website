import { RadioGroup, RadioCard, Stack } from '@ubie/ubie-ui';
import { useState, useCallback } from 'react';
import type { FC, ChangeEventHandler } from 'react';

const Default: FC = () => {
  const options = ['option1', 'option2', 'option3'];

  const [selectedItem, setSelectedItem] = useState(options[0]);

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    setSelectedItem(event.currentTarget.value);
  }, []);

  return (
    <Stack spacing="md">
      <RadioGroup label="RadioCard Group" showRequiredLabel>
        {options.map((option) => (
          <RadioCard
            name="options"
            value={option}
            onChange={onChange}
            checked={selectedItem === option}
            id={option}
            key={option}
          >
            {option}
          </RadioCard>
        ))}
      </RadioGroup>

      <dl>
        <dt>Values</dt>
        <dd>{selectedItem}</dd>
      </dl>
    </Stack>
  );
};

export default Default;
