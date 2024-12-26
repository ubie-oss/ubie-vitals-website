import { Box, Text } from '@ubie/ubie-ui';
import type { FC } from 'react';

export const DefaultExample: FC = () => {
  return (
    <Box backgroundColor="blue" radius="md" pt="md" pb="md" pr="lg" pl="lg" mt="md" mb="md">
      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry`&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
      </Text>
    </Box>
  );
};
