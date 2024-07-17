import { Toggle } from '@ubie/ubie-ui';
import { useState, type FC, type ChangeEventHandler, useCallback } from 'react';

export const DisabledExample: FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    setIsChecked(event.currentTarget.checked);
  }, []);

  return <Toggle checked={isChecked} onChange={handleChange} disabled />;
};
