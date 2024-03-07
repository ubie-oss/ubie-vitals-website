import { Stack, Label, RadioCard } from '@ubie/ubie-ui';
import styles from './_ExampleRadioCard.module.css';
import type { FC } from 'react';

const options = ['option1', 'option2', 'option3'];

export const ExampleRadioCardHorizontally: FC = () => (
  <fieldset className={styles.fieldset}>
    <Stack spacing="md" alignItems="normal">
      <Label as="legend">ラジオカード（水平）</Label>
      <Stack spacing="sm" alignItems="normal" direction="row">
        {options.map((option) => (
          <RadioCard key={option} value={option} name="h-radio-card">
            {option}
          </RadioCard>
        ))}
      </Stack>
    </Stack>
  </fieldset>
);
