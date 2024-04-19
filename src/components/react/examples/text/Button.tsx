import { Text, Flex } from '@ubie/ubie-ui';
import type { FC } from 'react';

const Button: FC = () => {
  const buttonText = '同意して症状から調べる';

  return (
    <Flex spacing="md" alignItems="center">
      <Text type="button" size="sm">
        sm
        <br />
        {`${buttonText}`}
      </Text>
      <Text type="button" size="md">
        md
        <br />
        {`${buttonText}`}
      </Text>
      <Text type="button" size="lg">
        lg
        <br />
        {`${buttonText}`}
      </Text>
    </Flex>
  );
};

export default Button;
