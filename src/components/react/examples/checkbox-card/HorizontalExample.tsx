import { CheckboxCard, CheckboxGroup } from '@ubie/ubie-ui';
import { type ChangeEventHandler, type FC, useCallback, useState } from 'react';

const items = ['選択肢A', '選択肢B', '選択肢C', 'この中に該当なし'];

export const HorizontalExample: FC = () => {
  const [selectedItem, setSelectedItem] = useState<string[]>([items[0]]);

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      if (event.currentTarget.checked) {
        setSelectedItem([...selectedItem, event.currentTarget.value]);
      } else {
        setSelectedItem(selectedItem.filter((item) => item !== event.target.value));
      }
    },
    [selectedItem],
  );

  return (
    <CheckboxGroup direction="row">
      {items.map((item) => (
        <CheckboxCard checked={selectedItem.includes(item)} onChange={onChange} name="symptoms" value={item} key={item}>
          {item}
        </CheckboxCard>
      ))}
    </CheckboxGroup>
  );
};
