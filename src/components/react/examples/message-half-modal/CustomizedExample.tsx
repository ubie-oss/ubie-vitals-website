import { MessageHalfModal } from '@ubie/ubie-ui';
import { useState } from 'react';
import type { FC } from 'react';

export const CustomizedExample: FC = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setOpen(true);
        }}
      >
        open
      </button>
      <MessageHalfModal
        header="Customized Example"
        overlayOpacity="darker"
        fullscreen
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        closeLabel="Cancel"
      >
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry`&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </MessageHalfModal>
    </>
  );
};
