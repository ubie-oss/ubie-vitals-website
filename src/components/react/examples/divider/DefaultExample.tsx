import { Divider, Stack, Text } from '@ubie/ubie-ui';
import type { FC } from 'react';

export const DefaultExample: FC = () => {
  return (
    <Stack spacing="md">
      <Stack spacing="xs">
        <Text type="tag" size="lg" bold>
          Default
        </Text>
        <Divider />
      </Stack>

      <Stack spacing="xs">
        <Text type="tag" size="lg" bold>
          Gray
        </Text>
        <Divider border="black" />
      </Stack>

      <Stack spacing="xs">
        <Text type="tag" size="lg" bold>
          Primary
        </Text>
        <Divider border="blue" />
      </Stack>
    </Stack>
  );
};
