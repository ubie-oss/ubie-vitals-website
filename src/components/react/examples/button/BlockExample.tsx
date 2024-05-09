import { Button } from '@ubie/ubie-ui';
import type { FC } from 'react';

const BlockExample: FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <Button block size="small" variant="secondary">
          ボタン
        </Button>
      </div>
      <div>
        <Button block size="medium" variant="secondary">
          ボタン
        </Button>
      </div>
      <div>
        <Button block size="large" variant="secondary">
          ボタン
        </Button>
      </div>
    </div>
  );
};

export default BlockExample;
