import { Button } from '@ubie/ubie-ui';
import type { FC } from 'react';

const DisabledExample: FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px', flexWrap: 'wrap' }}>
      <Button disabled>ボタン</Button>
      <Button variant="secondary" disabled>
        ボタン
      </Button>
      <Button variant="alert" disabled>
        ボタン
      </Button>
      <Button variant="text" disabled>
        ボタン
      </Button>
      <Button variant="textAlert" disabled>
        ボタン
      </Button>
    </div>
  );
};

export default DisabledExample;
