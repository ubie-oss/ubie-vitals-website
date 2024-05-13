import { Heading, Stack } from '@ubie/ubie-ui';
import type { FC } from 'react';

const ColorsExample: FC = () => {
  return (
    <Stack spacing="md">
      <Heading as="p" color="main" size="md">
        スマートフォン問診（main）
      </Heading>

      <Heading as="p" color="primary" size="md">
        スマートフォン問診（primary）
      </Heading>

      <Heading as="p" color="accent" size="md">
        スマートフォン問診（accent）
      </Heading>

      <div style={{ backgroundColor: 'var(--color-primary)', padding: 'var(--size-spacing-xs)' }}>
        <Heading as="p" color="white" size="md">
          スマートフォン問診（white）
        </Heading>
      </div>
    </Stack>
  );
};

export default ColorsExample;
