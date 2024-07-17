import { CheckboxCard, CheckboxGroup } from '@ubie/ubie-ui';
import { type ChangeEventHandler, type FC, useCallback, useState } from 'react';

const items = ['選択肢A', '選択肢B', '選択肢C', 'この中に該当なし'];

export const DefaultExample: FC = () => {
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
    <CheckboxGroup label="症状" showRequiredLabel>
      {items.map((item) => (
        <CheckboxCard
          block
          checked={selectedItem.includes(item)}
          onChange={onChange}
          name="symptoms"
          value={item}
          key={item}
        >
          {item}
        </CheckboxCard>
      ))}
    </CheckboxGroup>
  );
};
