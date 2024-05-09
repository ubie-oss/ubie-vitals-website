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
        header="削除します"
        closeLabel="キャンセル"
        overlayOpacity="darker"
        primaryActionLabel="削除"
        primaryActionColor="alert"
        open={open}
        onPrimaryAction={() => setOpen(false)}
        onClose={() => setOpen(false)}
      >
        Default
      </ActionModal>
    </>
  );
};

export default Secondary;
