import { Stack, Label, Checkbox } from '@ubie/ubie-ui';
import styles from './_ExampleCheckbox.module.css';
import type { FC } from 'react';

const options = ['option1', 'option2', 'option3'];

export const ExampleCheckbox: FC = () => (
  <fieldset className={styles.fieldset}>
    <Stack spacing="md">
      <Label as="legend">チェックボックス</Label>
      {options.map((option) => (
        <Checkbox key={option} value={option} name="checkbox">
          {option}
        </Checkbox>
      ))}
    </Stack>
  </fieldset>
);
