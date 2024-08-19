import { ActionHalfModal } from '@ubie/ubie-ui';
import { useState, useCallback } from 'react';
import type { FC } from 'react';

const Default: FC = () => {
  const [open, setOpen] = useState(true);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open Modal
      </button>
      <ActionHalfModal primaryActionLabel="アクション" onPrimaryAction={onClose} open={open} onClose={onClose}>
        Body
      </ActionHalfModal>
    </>
  );
};

export default Default;
