import { Stack, Label, RadioButton } from '@ubie/ubie-ui';
import styles from './_ExampleRadioButton.module.css';
import type { FC } from 'react';

const options = ['option1', 'option2', 'option3'];

export const ExampleRadioButton: FC = () => (
  <fieldset className={styles.fieldset}>
    <Stack spacing="md">
      <Label as="legend">ラジオボタン</Label>
      {options.map((option) => (
        <RadioButton key={option} value={option} name="radio-button">
          {option}
        </RadioButton>
      ))}
    </Stack>
  </fieldset>
);
