import { LinkButton } from '@ubie/ubie-ui';
import type { FC } from 'react';

const Block: FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <LinkButton href="https://vitals.ubie.life/" size="small" variant="secondary" block>
          ボタン
        </LinkButton>
      </div>
      <div>
        <LinkButton href="https://vitals.ubie.life/" size="medium" variant="secondary" block>
          ボタン
        </LinkButton>
      </div>
      <div>
        <LinkButton href="https://vitals.ubie.life/" size="large" variant="secondary" block>
          ボタン
        </LinkButton>
      </div>
    </div>
  );
};

export default Block;
