import { Checkbox, CheckboxGroup } from '@ubie/ubie-ui';
import type { FC } from 'react';

const options = ['option1', 'option2', 'option3'];

export const ExampleCheckbox: FC = () => (
  <CheckboxGroup label="チェックボックス">
    {options.map((option) => (
      <Checkbox key={option} value={option} name="checkbox">
        {option}
      </Checkbox>
    ))}
  </CheckboxGroup>
);
