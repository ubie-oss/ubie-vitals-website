import { Input } from '@ubie/ubie-ui';
import type { FC } from 'react';

const IsInvalidExample: FC = () => {
  return <Input value="wrong value" isInvalid />;
};

export default IsInvalidExample;
