import { Button } from '@ubie/ubie-ui';
import type { FC } from 'react';

export const LoadingExample: FC = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
      <Button loading>ボタン</Button>
      <Button variant="secondary" loading>
        ボタン
      </Button>
      <Button variant="accent" loading>
        ボタン
      </Button>
      <Button variant="alert" loading>
        ボタン
      </Button>
      <Button variant="text" loading>
        ボタン
      </Button>
      <Button variant="textAlert" loading>
        ボタン
      </Button>
    </div>
  );
};
