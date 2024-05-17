import { CheckboxGroup, Checkbox, Stack } from '@ubie/ubie-ui';
import { useState, useCallback } from 'react';
import type { FC, ChangeEventHandler } from 'react';

const Default: FC = () => {
  const options = ['option1', 'option2', 'option3'];

  const [selectedItem, setSelectedItem] = useState<string[]>([options[0]]);

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      if (event.target.checked) {
        setSelectedItem([...selectedItem, event.target.value]);
      } else {
        setSelectedItem(selectedItem.filter((item) => item !== event.target.value));
      }
    },
    [selectedItem],
  );

  return (
    <Stack spacing="md">
      <CheckboxGroup label="Checkbox Group" showRequiredLabel>
        {options.map((option) => (
          <Checkbox
            name="options"
            value={option}
            onChange={onChange}
            checked={selectedItem.includes(option)}
            key={option}
          >
            {option}
          </Checkbox>
        ))}
      </CheckboxGroup>

      <dl>
        <dt>Values</dt>
        <dd>{selectedItem.join(',')}</dd>
      </dl>
    </Stack>
  );
};

export default Default;
