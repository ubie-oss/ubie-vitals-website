import { Select, Stack } from '@ubie/ubie-ui';
import { useState, useCallback } from 'react';
import type { FC, ChangeEventHandler } from 'react';

const options = ['option1', 'option2', 'option3'];

const Default: FC = () => {
  const [selectedItem, setSelectedItem] = useState(options[0]);

  const onChange: ChangeEventHandler<HTMLSelectElement> = useCallback((event) => {
    setSelectedItem(event.target.value);
  }, []);

  return (
    <Stack spacing="md" alignItems="normal">
      <Select name="default" value={selectedItem} onChange={onChange}>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </Select>

      <dl>
        <dt>Value</dt>
        <dd>{selectedItem}</dd>
      </dl>
    </Stack>
  );
};

export default Default;
