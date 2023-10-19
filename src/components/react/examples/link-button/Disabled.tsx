import { LinkButton } from '@ubie/ubie-ui';
import type { FC } from 'react';

const Disabled: FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px', flexWrap: 'wrap' }}>
      <LinkButton href="https://vitals.ubie.life/" disabled>
        ボタン
      </LinkButton>
      <LinkButton href="https://vitals.ubie.life/" variant="secondary" disabled>
        ボタン
      </LinkButton>
      <LinkButton href="https://vitals.ubie.life/" variant="accent" disabled>
        ボタン
      </LinkButton>
      <LinkButton href="https://vitals.ubie.life/" variant="alert" disabled>
        ボタン
      </LinkButton>
      <LinkButton href="https://vitals.ubie.life/" variant="text" disabled>
        ボタン
      </LinkButton>
      <LinkButton href="https://vitals.ubie.life/" variant="textAlert" disabled>
        ボタン
      </LinkButton>
    </div>
  );
};

export default Disabled;
