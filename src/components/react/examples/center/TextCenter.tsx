import { Center } from '@ubie/ubie-ui';
import type { FC } from 'react';

const TextCenter: FC = () => {
  return (
    <Center maxWidth="400px" textCenter>
      <p>Text content is centered.</p>

      <div style={{ width: 160, padding: 'var(--size-spacing-md)', backgroundColor: 'var(--color-ubie-black-100)' }}>
        Child element is not centered.
      </div>
    </Center>
  );
};

export default TextCenter;
