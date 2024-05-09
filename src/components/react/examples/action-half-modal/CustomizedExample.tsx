import { ActionHalfModal } from '@ubie/ubie-ui';
import { useCallback, useState } from 'react';
import type { FC } from 'react';

const CustomizedExample: FC = () => {
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
        header="削除します"
        primaryActionColor="alert"
        primaryActionLabel="削除"
        onPrimaryAction={onClose}
        overlayOpacity="darker"
        closeLabel="キャンセル"
        open={open}
        onClose={onClose}
      >
        body
      </ActionHalfModal>
    </>
  );
};

export default CustomizedExample;
