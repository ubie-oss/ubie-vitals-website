import { Flex } from '@ubie/ubie-ui';
import type { FC } from 'react';

const CentralizedExample: FC = () => {
  return (
    <Flex spacing="md" justifyContent="center" alignItems="center">
      <span>
        Words
        <br />
        crowded
      </span>
      <span>in</span>
      <span>
        simply
        <br />
        dummy
        <br />
        text
      </span>
    </Flex>
  );
};

export default CentralizedExample;
