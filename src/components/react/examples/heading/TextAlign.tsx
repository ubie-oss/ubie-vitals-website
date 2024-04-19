import { Heading, Stack } from '@ubie/ubie-ui';
import type { FC } from 'react';

const TextAlign: FC = () => {
  return (
    <Stack spacing="md" alignItems="normal">
      <Heading as="p" size="md" textAlign="left">
        スマートフォン問診
      </Heading>
      <Heading as="p" size="md" textAlign="center">
        スマートフォン問診
      </Heading>
      <Heading as="p" size="md" textAlign="right">
        スマートフォン問診
      </Heading>
    </Stack>
  );
};

export default TextAlign;
