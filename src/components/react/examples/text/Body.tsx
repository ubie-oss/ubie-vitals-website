import { Text, Stack } from '@ubie/ubie-ui';
import type { FC } from 'react';

const Body: FC = () => {
  const bodyText =
    '症状検索エンジン「ユビー」は「適切なタイミングでの適切な医療との出会い」の橋渡しによって、みなさんの健康・安全をサポートし、医療についての不安・悩み・苦痛を和らげます。';

  return (
    <Stack as="dl" spacing="md">
      <div>
        <dt>Default Leading</dt>
        <dd>
          <Stack spacing="md" direction="row" alignItems="center">
            <Text type="body" size="sm">
              sm
              <br />
              {`${bodyText}`}
            </Text>
            <Text type="body" size="md">
              md
              <br />
              {`${bodyText}`}
            </Text>
            <Text type="body" size="lg">
              lg
              <br />
              {`${bodyText}`}
            </Text>
          </Stack>
        </dd>
      </div>

      <div>
        <dt>Narrow Leading</dt>
        <dd>
          <Stack spacing="md" direction="row" alignItems="center">
            <Text leading="narrow" type="body" size="sm">
              sm
              <br />
              {`${bodyText}`}
            </Text>
            <Text leading="narrow" type="body" size="md">
              md
              <br />
              {`${bodyText}`}
            </Text>
            <Text leading="narrow" type="body" size="lg">
              lg
              <br />
              {`${bodyText}`}
            </Text>
          </Stack>
        </dd>
      </div>

      <div>
        <dt>Tight Leading</dt>
        <dd>
          <Stack spacing="md" direction="row" alignItems="center">
            <Text leading="tight" type="body" size="sm">
              sm
              <br />
              {`${bodyText}`}
            </Text>
            <Text leading="tight" type="body" size="md">
              md
              <br />
              {`${bodyText}`}
            </Text>
            <Text leading="tight" type="body" size="lg">
              lg
              <br />
              {`${bodyText}`}
            </Text>
          </Stack>
        </dd>
      </div>
    </Stack>
  );
};

export default Body;
