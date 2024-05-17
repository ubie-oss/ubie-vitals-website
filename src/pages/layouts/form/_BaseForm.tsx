import { Stack, Input, Select, Button, TextArea, RadioButton, Label, HelperMessage, RadioGroup } from '@ubie/ubie-ui';
import { useId, type FC } from 'react';
import styles from './_BaseForm.module.css';

const options = ['選択してください', '内科', '皮膚科'];

const reasons = ['新しい病気', '治療中の病気'];

export const BaseForm: FC = () => {
  const departmentId = useId();
  const dateId = useId();
  const memoId = useId();

  return (
    <div className={styles.container}>
      <Stack spacing="xl" alignItems="normal">
        <Stack spacing="xs">
          <h1 className={styles.heading}>受診の記録を追加</h1>
          <p className={styles.subHeading}>補足の説明</p>
        </Stack>

        <Stack spacing="xs" alignItems="normal">
          <Label htmlFor={departmentId} showRequiredLabel>
            受診した診療科
          </Label>

          <Select name="default" id={departmentId}>
            {options.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </Select>
        </Stack>

        <Stack spacing="xs">
          <Label htmlFor={dateId}>受診日（任意）</Label>
          <Input id={dateId} type="date" value="" />
          <HelperMessage>2000/1/1以降の日付を入力してください</HelperMessage>
        </Stack>

        <RadioGroup label="受診理由（任意）">
          {reasons.map((reason) => (
            <RadioButton key={reason} value={reason} name="deafult" checked={false} onChange={() => {}}>
              {reason}
            </RadioButton>
          ))}
        </RadioGroup>

        <Stack spacing="xs">
          <Label htmlFor={memoId}>メモ（任意）</Label>
          <TextArea id={memoId} value="" />
        </Stack>

        <Button variant="primary" block>
          記録を追加
        </Button>
      </Stack>
    </div>
  );
};
