import { Stack, Input, Select, Button, TextArea, RadioButton, Label, HelperMessage, RadioGroup } from '@ubie/ubie-ui';
import styles from './_BaseForm.module.css';
import type { FC } from 'react';

const options = ['選択してください', '内科', '皮膚科'];

const reasons = ['新しい病気', '治療中の病気'];

export const BaseForm: FC = () => (
  <div className={styles.container}>
    <Stack spacing="xl" alignItems="normal">
      <Stack spacing="xs">
        <h1 className={styles.heading}>受診の記録を追加</h1>
        <p className={styles.subHeading}>補足の説明</p>
      </Stack>

      <Stack spacing="xs" alignItems="normal">
        <Label htmlFor="department">受診した診療科</Label>

        <Select name="default" id="department">
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </Select>
      </Stack>

      <Stack spacing="xs">
        <Label htmlFor="date">受診日（任意）</Label>
        <Input id="date" type="date" />
        <HelperMessage>2000/1/1以降の日付を入力してください</HelperMessage>
      </Stack>

      <RadioGroup label="受診理由（任意）">
        {reasons.map((reason) => (
          <RadioButton key={reason} value={reason} name="deafult">
            {reason}
          </RadioButton>
        ))}
      </RadioGroup>

      <Stack spacing="xs">
        <Label htmlFor="memo">メモ（任意）</Label>
        <TextArea id="memo" />
      </Stack>

      <Button variant="primary" block>
        記録を追加
      </Button>
    </Stack>
  </div>
);
