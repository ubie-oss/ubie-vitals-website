import { Stack, Label, Input, ErrorMessage, HelperMessage } from '@ubie/ubie-ui';
import type { FC } from 'react';

export const Error: FC = () => (
  <Stack spacing="xs">
    <Label htmlFor="error-field">フィールド</Label>
    <Input id="error-field" isInvalid />
    <ErrorMessage>0〜99の範囲で入力してください</ErrorMessage>
    <ErrorMessage>半角数字を入力してください</ErrorMessage>
    <HelperMessage>説明文です</HelperMessage>
  </Stack>
);
