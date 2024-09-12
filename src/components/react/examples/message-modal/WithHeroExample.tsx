import { MessageModal } from '@ubie/ubie-ui';
import { type FC, useState } from 'react';

export const WithHeroExample: FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open Modal
      </button>
      <MessageModal
        hero={
          <img
            src="/assets/images/components/modals/hero-placeholder.svg"
            alt="Illustration: Modal"
            style={{ width: '100%', height: 'auto', verticalAlign: 'bottom' }}
            width={560}
            height={315}
          />
        }
        header="メッセージ"
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
};
