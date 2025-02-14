import { TextArea, Stack, Label } from '@ubie/ubie-ui';
import { useState, useCallback, useId } from 'react';
import type { ChangeEventHandler, FC } from 'react';

const DefaultExample: FC = () => {
  const [value, setValue] = useState('Lorem\nipsum');

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  const id = useId();

  return (
    <Stack>
      <Label htmlFor={id} showRequiredLabel>
        Field
      </Label>
      <TextArea id={id} value={value} onChange={onChange} />
    </Stack>
  )
};

export default DefaultExample;
