import { Input } from '@ubie/ubie-ui';
import type { FC } from 'react';

const IsInvalid: FC = () => {
  return <Input value="wrong value" isInvalid />;
};

export default IsInvalid;
