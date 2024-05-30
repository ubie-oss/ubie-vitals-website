import { MessageHalfModal } from '@ubie/ubie-ui';
import { useState } from 'react';
import type { FC } from 'react';

export const DefaultExample: FC = () => {
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
        header="Title"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
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
