import { Heading, Stack } from '@ubie/ubie-ui';
import type { FC } from 'react';

const Variants: FC = () => {
  return (
    <Stack spacing="md">
      <Heading as="p" variant="secondary" size="md">
        スマートフォン問診（secondary）
      </Heading>

      <Heading as="p" variant="primary" size="md">
        スマートフォン問診（primary）
      </Heading>

      <Heading as="p" variant="accent" size="md">
        スマートフォン問診（accent）
      </Heading>

      <div style={{ backgroundColor: 'var(--color-primary)', padding: 'var(--size-spacing-xs)' }}>
        <Heading as="p" variant="white" size="md">
          スマートフォン問診（white）
        </Heading>
      </div>
    </Stack>
  );
};

export default Variants;
