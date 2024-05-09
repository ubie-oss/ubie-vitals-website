import { LinkButton } from '@ubie/ubie-ui';
import type { FC } from 'react';

const SizeExample: FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
        <LinkButton href="https://vitals.ubie.life/" size="small">
          Small
        </LinkButton>
        <LinkButton href="https://vitals.ubie.life/" size="medium">
          Medium
        </LinkButton>
        <LinkButton href="https://vitals.ubie.life/">Large</LinkButton>
      </div>
    </div>
  );
};

export default SizeExample;
