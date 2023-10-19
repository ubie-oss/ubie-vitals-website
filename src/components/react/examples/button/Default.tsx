import { Button } from '@ubie/ubie-ui';
import type { FC } from 'react';

const Default: FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px', flexWrap: 'wrap' }}>
      <Button>ボタン</Button>
      <Button variant="secondary">ボタン</Button>
      <Button variant="accent">ボタン</Button>
      <Button variant="alert">ボタン</Button>
      <Button variant="text">ボタン</Button>
      <Button variant="textAlert">ボタン</Button>
    </div>
  );
};

export default Default;
