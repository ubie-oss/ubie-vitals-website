import { LinkButton } from '@ubie/ubie-ui';
import type { FC } from 'react';

const Default: FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px', flexWrap: 'wrap' }}>
      <LinkButton href="https://vitals.ubie.life/">ボタン</LinkButton>
      <LinkButton href="https://vitals.ubie.life/" variant="secondary">
        ボタン
      </LinkButton>
      <LinkButton href="https://vitals.ubie.life/" variant="accent">
        ボタン
      </LinkButton>
      <LinkButton href="https://vitals.ubie.life/" variant="alert">
        ボタン
      </LinkButton>
      <LinkButton href="https://vitals.ubie.life/" variant="text">
        ボタン
      </LinkButton>
      <LinkButton href="https://vitals.ubie.life/" variant="textAlert">
        ボタン
      </LinkButton>
    </div>
  );
};

export default Default;
