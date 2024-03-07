import { Stack, Select, Label, ErrorMessage } from '@ubie/ubie-ui';
import type { FC } from 'react';

const options = ['選択してください', '内科', '皮膚科'];

const FormError: FC = () => (
  <Stack spacing="sm" alignItems="normal">
    <Label htmlFor="department">受診した診療科</Label>

    <Select name="default" id="department" aria-invalid="true" isInvalid>
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </Select>

    <ErrorMessage>入力してください</ErrorMessage>
  </Stack>
);

export default FormError;
