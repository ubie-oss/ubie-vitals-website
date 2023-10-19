import { Text, Stack } from '@ubie/ubie-ui';
import type { FC } from 'react';

const Note: FC = () => {
  const noteText =
    '症状検索エンジン「ユビー」は「適切なタイミングでの適切な医療との出会い」の橋渡しによって、みなさんの健康・安全をサポートし、医療についての不安・悩み・苦痛を和らげます。';

  return (
    <Stack as="dl" spacing="md">
      <div>
        <dt>Default Leading</dt>
        <dd>
          <Stack spacing="md" direction="row" alignItems="center">
            <Text type="note" size="sm">
              sm
              <br />
              {`${noteText}`}
            </Text>
            <Text type="note" size="md">
              md
              <br />
              {`${noteText}`}
            </Text>
            <Text type="note" size="lg">
              lg
              <br />
              {`${noteText}`}
            </Text>
          </Stack>
        </dd>
      </div>

      <div>
        <dt>Narrow Leading</dt>
        <dd>
          <Stack spacing="md" direction="row" alignItems="center">
            <Text leading="narrow" type="note" size="sm">
              sm
              <br />
              {`${noteText}`}
            </Text>
            <Text leading="narrow" type="note" size="md">
              md
              <br />
              {`${noteText}`}
            </Text>
            <Text leading="narrow" type="note" size="lg">
              lg
              <br />
              {`${noteText}`}
            </Text>
          </Stack>
        </dd>
      </div>
      <div>
        <dt>Tight Leading</dt>
        <dd>
          <Stack spacing="md" direction="row" alignItems="center">
            <Text leading="tight" type="note" size="sm">
              sm
              <br />
              {`${noteText}`}
            </Text>
            <Text leading="tight" type="note" size="md">
              md
              <br />
              {`${noteText}`}
            </Text>
            <Text leading="tight" type="note" size="lg">
              lg
              <br />
              {`${noteText}`}
            </Text>
          </Stack>
        </dd>
      </div>
    </Stack>
  );
};

export default Note;
