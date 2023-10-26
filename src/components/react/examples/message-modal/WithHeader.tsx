import { MessageModal } from '@ubie/ubie-ui';
import { useState } from 'react';
import type { FC } from 'react';

const WithHeader: FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open Modal
      </button>
      <MessageModal header="メッセージ" open={open} onClose={() => setOpen(false)}>
        <p>Default</p>
      </MessageModal>
    </>
  );
};

export default WithHeader;
