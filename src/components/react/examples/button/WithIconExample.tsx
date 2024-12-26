import { Button, Stack } from '@ubie/ubie-ui';
import type { FC } from 'react';

const WithIconExample: FC = () => {
  return (
    <Stack spacing="lg">
      <Stack spacing="lg" as="dl">
        <dt style={{ fontWeight: 'bold' }}>Default Position</dt>
        <dd style={{ margin: 0 }}>
          <div
            style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px', flexWrap: 'wrap' }}
          >
            <Button icon="UbieIcon">ボタン</Button>
            <Button icon="UbieIcon" variant="secondary">
              ボタン
            </Button>
            <Button icon="UbieIcon" variant="alert">
              ボタン
            </Button>
            <Button icon="UbieIcon" variant="text">
              ボタン
            </Button>
            <Button icon="TrashIcon" variant="textAlert">
              ボタン
            </Button>
          </div>
        </dd>
      </Stack>

      <Stack spacing="lg" as="dl">
        <dt style={{ fontWeight: 'bold' }}>Position Suffix</dt>
        <dd style={{ margin: 0 }}>
          <div
            style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px', flexWrap: 'wrap' }}
          >
            <Button suffixIcon="BlankLinkIcon">ボタン</Button>
            <Button suffixIcon="BlankLinkIcon" variant="secondary">
              ボタン
            </Button>
            <Button suffixIcon="BlankLinkIcon" variant="alert">
              ボタン
            </Button>
            <Button suffixIcon="BlankLinkIcon" variant="text">
              ボタン
            </Button>
            <Button suffixIcon="TrashIcon" variant="textAlert">
              ボタン
            </Button>
          </div>
        </dd>
      </Stack>

      <Stack spacing="lg" as="dl">
        <dt style={{ fontWeight: 'bold' }}>Position Fixed</dt>
        <dd style={{ margin: 0 }}>
          <div
            style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px', flexWrap: 'wrap' }}
          >
            <Button fixedIcon="BlankLinkIcon">ボタン</Button>
            <Button fixedIcon="BlankLinkIcon" variant="secondary">
              ボタン
            </Button>
            <Button fixedIcon="BlankLinkIcon" variant="alert">
              ボタン
            </Button>
            <Button fixedIcon="BlankLinkIcon" variant="text">
              ボタン
            </Button>
            <Button fixedIcon="TrashIcon" variant="textAlert">
              ボタン
            </Button>
          </div>
        </dd>
      </Stack>
    </Stack>
  );
};

export default WithIconExample;
