import { CheckboxCard, CheckboxGroup } from '@ubie/ubie-ui';
import { type FC } from 'react';

const items = ['選択肢A', '選択肢B', '選択肢C', 'この中に該当なし'];

export const ExampleCheckboxCardHorizontally: FC = () => {
  return (
    <CheckboxGroup label="症状" direction="row">
      {items.map((item) => (
        <CheckboxCard name="symptoms" value={item} key={item}>
          {item}
        </CheckboxCard>
      ))}
    </CheckboxGroup>
  );
};
