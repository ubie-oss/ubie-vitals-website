import { ActionModal } from '@ubie/ubie-ui';
import { useState } from 'react';
import type { FC } from 'react';

const Secondary: FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open Modal
      </button>
      <ActionModal
        header="モーダル"
        primaryActionLabel="回答を見る"
        open={open}
        onPrimaryAction={() => setOpen(false)}
        secondaryActionLabel={'このまま回答を続ける'}
        onSecondaryAction={() => setOpen(false)}
        onClose={() => setOpen(false)}
      >
        Default
      </ActionModal>
    </>
  );
};

export default Secondary;
