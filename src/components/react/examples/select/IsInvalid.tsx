import { Select } from '@ubie/ubie-ui';
import type { FC } from 'react';

const IsInvalid: FC = () => {
  const options = ['option1', 'option2', 'option3'];

  return (
    <Select isInvalid value={options[0]}>
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </Select>
  );
};

export default IsInvalid;
