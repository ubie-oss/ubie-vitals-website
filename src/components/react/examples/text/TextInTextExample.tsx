import { Text } from '@ubie/ubie-ui';
import type { FC } from 'react';

const TextInTextExample: FC = () => {
  return (
    <Text type="body" size="md">
      <Text as="span" type="body" size="md" color="red" bold>
        Alert:
      </Text>{' '}
      Please fill in all fields
    </Text>
  );
};

export default TextInTextExample;
