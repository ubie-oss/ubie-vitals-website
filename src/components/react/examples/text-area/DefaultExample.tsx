import { TextArea } from '@ubie/ubie-ui';
import { useState, useCallback } from 'react';
import type { ChangeEventHandler, FC } from 'react';

const DefaultExample: FC = () => {
  const [value, setValue] = useState('Lorem\nipsum');

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  return <TextArea value={value} onChange={onChange} />;
};

export default DefaultExample;
