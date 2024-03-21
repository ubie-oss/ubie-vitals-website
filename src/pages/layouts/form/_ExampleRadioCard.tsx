import { RadioCard, RadioGroup } from '@ubie/ubie-ui';
import type { FC } from 'react';

const options = ['option1', 'option2', 'option3'];

export const ExampleRadioCard: FC = () => (
  <RadioGroup label="ラジオカード">
    {options.map((option) => (
      <RadioCard key={option} value={option} name="radio-card">
        {option}
      </RadioCard>
    ))}
  </RadioGroup>
);
