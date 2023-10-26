import { Button } from '@ubie/ubie-ui';
import type { FC } from 'react';

const Default: FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
      <Button size="small">Small</Button>

      <Button size="medium">Medium</Button>

      <Button>Large</Button>
    </div>
  );
};

export default Default;
