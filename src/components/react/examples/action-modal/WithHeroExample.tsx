import { ActionModal } from '@ubie/ubie-ui';
import { type FC, useState } from 'react';

export const WithHeroExample: FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open Modal
      </button>
      <ActionModal
        hero={
          <img
            src="/assets/images/components/modals/hero-placeholder.svg"
            alt="Illustration: Modal"
            style={{ width: '100%', height: 'auto', verticalAlign: 'bottom' }}
            width={560}
            height={315}
          />
        }
        open={open}
        onPrimaryAction={() => setOpen(false)}
        onClose={() => setOpen(false)}
      >
        <p style={{ margin: 0 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </ActionModal>
    </>
  );
};
