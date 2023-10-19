import { MessageModal } from '@ubie/ubie-ui';
import { useState } from 'react';
import type { FC } from 'react';

const OverlayDarker: FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open Modal
      </button>
      <MessageModal open={open} onClose={() => setOpen(false)} overlayOpacity="darker">
        <p>Default</p>
      </MessageModal>
    </>
  );
};

export default OverlayDarker;
