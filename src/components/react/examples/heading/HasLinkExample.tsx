import { Heading, Stack } from '@ubie/ubie-ui';
import type { FC } from 'react';

const HasLinkExample: FC = () => {
  return (
    <Stack spacing="md">
      <Heading as="p" color="main" size="md">
        スマートフォン問診（main）<a href="https://vitals.ubie.life/">Link</a>
      </Heading>
    </Stack>
  );
};

export default HasLinkExample;
