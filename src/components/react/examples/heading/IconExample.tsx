import { UbieIcon, ThumbUpOutlineIcon, SetupIcon } from '@ubie/ubie-icons';
import { Heading, Stack } from '@ubie/ubie-ui';
import type { FC } from 'react';

const IconExample: FC = () => {
  return (
    <Stack spacing="md">
      <Heading as="p" primaryIcon={<UbieIcon />}>
        スマートフォン問診
      </Heading>

      <Heading as="p" accentIcon={<ThumbUpOutlineIcon />}>
        スマートフォン問診
      </Heading>

      <div style={{ backgroundColor: 'var(--color-primary)', padding: 'var(--size-spacing-xs)' }}>
        <Heading as="p" color="white" whiteIcon={<SetupIcon />}>
          スマートフォン問診
        </Heading>
      </div>
    </Stack>
  );
};

export default IconExample;
