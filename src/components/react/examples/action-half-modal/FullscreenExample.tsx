import { ActionHalfModal } from '@ubie/ubie-ui';
import { useCallback, useState } from 'react';
import type { FC } from 'react';

const FullscreenExample: FC = () => {
  const [open, setOpen] = useState(true);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open Modal
      </button>
      <ActionHalfModal header="モーダル" open={open} onClose={onClose} fullscreen>
        body
      </ActionHalfModal>
    </>
  );
};

export default FullscreenExample;
