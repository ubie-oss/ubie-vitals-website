import { Checkbox } from '@ubie/ubie-ui';
import { useState, useCallback } from 'react';
import type { FC, ChangeEventHandler } from 'react';

const SingleUseExample: FC = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => setChecked(event.target.checked), []);

  return (
    <Checkbox name="single-use" value="enable" checked={checked} onChange={onChange}>
      Enable Option
    </Checkbox>
  );
};

export default SingleUseExample;
