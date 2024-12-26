import { Flex, Icon } from '@ubie/ubie-ui';
import type { FC } from 'react';

export const SizeExample: FC = () => {
  return (
    <Flex gap="sm" wrap>
      <Icon icon="UbieIcon" color="blue" size="xs" />
      <Icon icon="UbieIcon" color="blue" size="sm" />
      <Icon icon="UbieIcon" color="blue" size="md" />
      <Icon icon="UbieIcon" color="blue" size="lg" />
      <Icon icon="UbieIcon" color="blue" size="xl" />
      <Icon icon="UbieIcon" color="blue" size="xxl" />
      <Icon icon="UbieIcon" color="blue" size="xxxl" />
      <Icon icon="UbieIcon" color="blue" size="xxxxl" />
    </Flex>
  );
};
