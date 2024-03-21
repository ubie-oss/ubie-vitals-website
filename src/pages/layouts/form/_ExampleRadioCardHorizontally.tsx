import { RadioCard, RadioGroup } from '@ubie/ubie-ui';
import type { FC } from 'react';

const options = ['option1', 'option2', 'option3'];

export const ExampleRadioCardHorizontally: FC = () => (
  <RadioGroup direction="row" label="ラジオカード（水平）">
    {options.map((option) => (
      <RadioCard key={option} value={option} name="h-radio-card">
        {option}
      </RadioCard>
    ))}
  </RadioGroup>
);
