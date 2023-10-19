import { ActionHalfModal } from '@ubie/ubie-ui';
import { useCallback, useState } from 'react';
import type { FC } from 'react';

const Secondary: FC = () => {
  const [open, setOpen] = useState(true);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open Modal
      </button>
      <ActionHalfModal
        primaryActionLabel="アクション1"
        onPrimaryAction={onClose}
        secondaryActionLabel="アクション2"
        onSecondaryAction={onClose}
        header="モーダル"
        open={open}
        onClose={onClose}
      >
        body
      </ActionHalfModal>
    </>
  );
};

export default Secondary;
