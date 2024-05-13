import { Stack, Label, Input } from '@ubie/ubie-ui';
import type { FC } from 'react';

export const ExampleTextField: FC = () => (
  <Stack spacing="xs">
    <Label htmlFor="text-field">テキストフィールド</Label>
    <Input id="text-field" type="text" value="" />
  </Stack>
);
