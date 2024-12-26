import { MessageHalfModal, Heading, Text, Center } from '@ubie/ubie-ui';
import { useCallback, useState } from 'react';
import type { FC } from 'react';

export const CustomHeaderExample: FC = () => {
  const [open, setOpen] = useState(true);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  const headerId = 'headerId';

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open Modal
      </button>
      <MessageHalfModal open={open} onClose={onClose}>
        <Center textCenter>
          <Heading id={headerId} size="xl">
            Custom Header
          </Heading>
        </Center>

        <Text>Body</Text>
      </MessageHalfModal>
    </>
  );
};
