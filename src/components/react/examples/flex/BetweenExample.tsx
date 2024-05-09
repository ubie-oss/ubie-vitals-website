import { UbieIcon } from '@ubie/ubie-icons';
import { Flex, Button, Box } from '@ubie/ubie-ui';
import type { FC } from 'react';

const BetweenExample: FC = () => {
  return (
    <Box pt="xs" pb="xs" pr="md" pl="md" border="gray">
      <Flex spacing="md" justifyContent="space-between" alignItems="center">
        <a href="/" aria-label="ロゴ/トップへ">
          <UbieIcon />
        </a>

        <Button variant="secondary" size="small">
          Login
        </Button>
      </Flex>
    </Box>
  );
};

export default BetweenExample;
