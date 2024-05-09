import { TextArea } from '@ubie/ubie-ui';
import type { FC } from 'react';

const DisabledExample: FC = () => {
  return <TextArea value={'Lorem\nipsum'} disabled />;
};

export default DisabledExample;
