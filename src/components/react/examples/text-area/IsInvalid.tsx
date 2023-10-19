import { TextArea } from '@ubie/ubie-ui';
import type { FC } from 'react';

const IsInvalid: FC = () => {
  return <TextArea value={'wrong\nvalue'} isInvalid />;
};

export default IsInvalid;
