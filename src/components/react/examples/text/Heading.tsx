import { Text, Stack } from '@ubie/ubie-ui';
import type { FC } from 'react';

const Heading: FC = () => {
  const headingText = '近くの医療機関から調べる';

  return (
    <Stack spacing="md" direction="row" alignItems="center">
      <Text bold type="heading" size="xs">
        xs
        <br />
        {`${headingText}`}
      </Text>
      <Text bold type="heading" size="sm">
        sm
        <br />
        {`${headingText}`}
      </Text>
      <Text bold type="heading" size="md">
        md
        <br />
        {`${headingText}`}
      </Text>
      <Text bold type="heading" size="lg">
        lg
        <br />
        {`${headingText}`}
      </Text>
      <Text bold type="heading" size="xl">
        xl
        <br />
        {`${headingText}`}
      </Text>
    </Stack>
  );
};

export default Heading;
