import { Text } from '@ubie/ubie-ui';
import { Bold } from '@ubie/ubie-ui/font';
import type { FC } from 'react';

export const WithTextExample: FC = () => {
  return (
      <Text type="body" size="lg" color="main">
        一部だけ<Bold>太字</Bold>にしたい
      </Text>
  );
};
