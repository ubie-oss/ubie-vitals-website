import { Stack } from '@ubie/ubie-ui';
import type { FC } from 'react';

const Nested: FC = () => {
  return (
    <Stack spacing="xl">
      <p style={{ margin: 0 }}>1</p>

      <Stack spacing="lg">
        <p style={{ margin: 0 }}>2</p>
        <p style={{ margin: 0 }}>2</p>
        <p style={{ margin: 0 }}>2</p>
      </Stack>

      <Stack spacing="lg">
        <p style={{ margin: 0 }}>2</p>
        <p style={{ margin: 0 }}>2</p>
        <Stack spacing="xs">
          <p style={{ margin: 0 }}>3</p>
          <p style={{ margin: 0 }}>3</p>
          <p style={{ margin: 0 }}>3</p>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Nested;
