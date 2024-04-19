import { Heading } from '@ubie/ubie-ui';
import type { FC } from 'react';

const LeadingBorder: FC = () => {
  return (
    <Heading as="p" leadingBorder>
      スマートフォン問診
    </Heading>
  );
};

export default LeadingBorder;
