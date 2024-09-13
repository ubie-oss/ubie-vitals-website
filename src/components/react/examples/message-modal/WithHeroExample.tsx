import { MessageModal } from '@ubie/ubie-ui';
import { type FC, useState } from 'react';

export const WithHeroExample: FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open Modal
      </button>
      <MessageModal
        hero={
          <img
            src="/assets/images/components/modals/hero-placeholder.svg"
            alt="Illustration: Modal"
            style={{ width: '100%', height: 'auto', verticalAlign: 'bottom' }}
            width={560}
            height={315}
          />
        }
        header="Title"
        open={open}
        onClose={() => setOpen(false)}
      >
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
      </MessageModal>
    </>
  );
};
