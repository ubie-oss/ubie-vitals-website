import { RadioButton, RadioGroup } from '@ubie/ubie-ui';
import type { FC } from 'react';

const options = ['option1', 'option2', 'option3'];

export const ExampleRadioButton: FC = () => (
  <RadioGroup label="ラジオボタン">
    {options.map((option) => (
      <RadioButton key={option} value={option} name="radio-button" onChange={() => {}} checked={false}>
        {option}
      </RadioButton>
    ))}
  </RadioGroup>
);
