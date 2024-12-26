import { Flex, Icon } from '@ubie/ubie-ui';
import type { FC } from 'react';

export const ColorExample: FC = () => {
  return (
    <Flex gap="sm" wrap>
      <Icon icon="UbieIcon" />
      <Icon icon="UbieIcon" color="blue" />
      <Icon icon="UbieIcon" color="pink" />
      <Icon icon="UbieIcon" color="orange" />
      <Icon icon="UbieIcon" color="purple" />
      <Icon icon="UbieIcon" color="green" />
      <Icon icon="UbieIcon" color="red" />
      <Icon icon="UbieIcon" color="black" />
    </Flex>
  );
};
