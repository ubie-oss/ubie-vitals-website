import { ActionModal } from '@ubie/ubie-ui';
import { useState } from 'react';
import type { FC } from 'react';

const Default: FC = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open Modal
      </button>
      <ActionModal
        header="モーダル"
        primaryActionLabel="回答を結果見る"
        open={open}
        onPrimaryAction={() => setOpen(false)}
        onClose={() => setOpen(false)}
      >
        Default
      </ActionModal>
    </>
  );
};

export default Default;
