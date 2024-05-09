import { Heading, Stack } from '@ubie/ubie-ui';
import type { FC } from 'react';

const HasLinkExample: FC = () => {
  return (
    <Stack spacing="md">
      <Heading as="p" variant="secondary" size="md">
        スマートフォン問診（secondary）<a href="https://vitals.ubie.life/">Link</a>
      </Heading>

      <Heading as="p" variant="primary" size="md">
        スマートフォン問診（primary）<a href="https://vitals.ubie.life/">Link</a>
      </Heading>
    </Stack>
  );
};

export default HasLinkExample;
