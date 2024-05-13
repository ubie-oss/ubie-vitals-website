import { ActionModal } from '@ubie/ubie-ui';
import { useState } from 'react';
import type { FC } from 'react';

const FixedHeightExample: FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open Modal
      </button>
      <ActionModal
        primaryActionLabel="回答を見る"
        open={open}
        fixedHeight
        onPrimaryAction={() => setOpen(false)}
        onClose={() => setOpen(false)}
      >
        <p>Default</p>
      </ActionModal>
    </>
  );
};

export default FixedHeightExample;
