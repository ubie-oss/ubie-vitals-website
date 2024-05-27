import { Text } from '@ubie/ubie-ui';
import { Color } from '@ubie/ubie-ui/font';
import type { FC } from 'react';

export const WithTextExample: FC = () => {
  return (
      <Text type="body" size="lg" color="main">
        一部だけ<Color color="accent">色を変更</Color>にしたい
      </Text>
  );
};
