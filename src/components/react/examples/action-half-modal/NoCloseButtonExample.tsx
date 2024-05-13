import { ActionHalfModal } from '@ubie/ubie-ui';
import { useCallback, useState } from 'react';
import type { FC } from 'react';

const NoCloseButtonExample: FC = () => {
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
        onPrimaryAction={onClose}
        primaryActionLabel="確認"
        showClose={false}
        header="モーダル"
        open={open}
        onClose={onClose}
      >
        body
      </ActionHalfModal>
    </>
  );
};

export default NoCloseButtonExample;
