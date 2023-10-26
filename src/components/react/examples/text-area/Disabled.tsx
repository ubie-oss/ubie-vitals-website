import { TextArea } from '@ubie/ubie-ui';
import type { FC } from 'react';

const Disabled: FC = () => {
  return <TextArea value={'Lorem\nipsum'} disabled />;
};

export default Disabled;
