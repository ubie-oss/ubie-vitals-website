import { Stack, Label, Select } from '@ubie/ubie-ui';
import type { FC } from 'react';

const options = ['option1', 'option2', 'option3'];

export const ExampleSelect: FC = () => (
  <Stack spacing="xs">
    <Label htmlFor="select">セレクトボックス</Label>
    <Select id="select">
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </Select>
  </Stack>
);
