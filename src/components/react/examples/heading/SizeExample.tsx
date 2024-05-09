import { Heading, Stack } from '@ubie/ubie-ui';
import type { FC } from 'react';

const SizeExample: FC = () => {
  return (
    <Stack spacing="md">
      <Heading as="p" size="xs">
        xs: スマートフォン問診
      </Heading>
      <Heading as="p" size="xs">
        xs: スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
      <Heading as="p" size="sm">
        sm: スマートフォン問診
      </Heading>
      <Heading as="p" size="sm">
        sm: スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
      <Heading as="p" size="md">
        md: スマートフォン問診
      </Heading>
      <Heading as="p">
        md: スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
      <Heading as="p" size="lg">
        lg: スマートフォン問診
      </Heading>
      <Heading as="p" size="lg">
        lg: スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
      <Heading as="p" size="xl">
        xl: スマートフォン問診
      </Heading>
      <Heading as="p" size="xl">
        xl: スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
    </Stack>
  );
};

export default SizeExample;
