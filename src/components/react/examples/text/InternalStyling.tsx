import { Text } from '@ubie/ubie-ui';
import type { FC } from 'react';

const InternalStyling: FC = () => {
  return (
    <Text type="note" size="lg">
      <Text as="span" type="note" size="lg" color="alert" bold>
        Alert:
      </Text>{' '}
      Please fill in all fields
    </Text>
  );
};

export default InternalStyling;
