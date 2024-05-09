import { Stack, Label, TextArea } from '@ubie/ubie-ui';
import type { FC } from 'react';

export const ExampleTextArea: FC = () => (
  <Stack spacing="xs">
    <Label htmlFor="text-area">テキストエリア</Label>
    <TextArea id="text-area" value="" />
  </Stack>
);
