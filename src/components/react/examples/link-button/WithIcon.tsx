import { UbieIcon, BlankLinkIcon, TrashIcon } from '@ubie/ubie-icons';
import { LinkButton, Stack } from '@ubie/ubie-ui';
import type { FC } from 'react';

const WithIcon: FC = () => {
  return (
    <Stack spacing="lg">
      <Stack spacing="lg" as="dl">
        <dt style={{ fontWeight: 'bold' }}>Default Position</dt>

        <dd style={{ margin: 0 }}>
          <div
            style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px', flexWrap: 'wrap' }}
          >
            <LinkButton href="https://vitals.ubie.life/" icon={<UbieIcon />}>
              ボタン
            </LinkButton>
            <LinkButton href="https://vitals.ubie.life/" icon={<UbieIcon />} variant="secondary">
              ボタン
            </LinkButton>
            <LinkButton href="https://vitals.ubie.life/" icon={<UbieIcon />} variant="accent">
              ボタン
            </LinkButton>
            <LinkButton href="https://vitals.ubie.life/" icon={<UbieIcon />} variant="alert">
              ボタン
            </LinkButton>
            <LinkButton href="https://vitals.ubie.life/" icon={<UbieIcon />} variant="text">
              ボタン
            </LinkButton>
            <LinkButton href="https://vitals.ubie.life/" icon={<TrashIcon />} variant="textAlert">
              ボタン
            </LinkButton>
          </div>
        </dd>
      </Stack>

      <Stack spacing="lg" as="dl">
        <dt style={{ fontWeight: 'bold' }}>Position Suffix</dt>
        <dd style={{ margin: 0 }}>
          <div
            style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px', flexWrap: 'wrap' }}
          >
            <LinkButton href="https://vitals.ubie.life/" suffixIcon={<BlankLinkIcon />}>
              ボタン
            </LinkButton>
            <LinkButton href="https://vitals.ubie.life/" suffixIcon={<BlankLinkIcon />} variant="secondary">
              ボタン
            </LinkButton>
            <LinkButton href="https://vitals.ubie.life/" suffixIcon={<BlankLinkIcon />} variant="accent">
              ボタン
            </LinkButton>
            <LinkButton href="https://vitals.ubie.life/" suffixIcon={<BlankLinkIcon />} variant="alert">
              ボタン
            </LinkButton>
            <LinkButton href="https://vitals.ubie.life/" suffixIcon={<BlankLinkIcon />} variant="text">
              ボタン
            </LinkButton>
            <LinkButton href="https://vitals.ubie.life/" suffixIcon={<BlankLinkIcon />} variant="textAlert">
              ボタン
            </LinkButton>
            <LinkButton href="https://vitals.ubie.life/" suffixIcon={<TrashIcon />} variant="textAlert">
              ボタン
            </LinkButton>
          </div>
        </dd>
      </Stack>

      <Stack spacing="lg" as="dl">
        <dt style={{ fontWeight: 'bold' }}>Position Fixed</dt>

        <dd style={{ margin: 0 }}>
          <div
            style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px', flexWrap: 'wrap' }}
          >
            <LinkButton href="https://vitals.ubie.life/" fixedIcon={<BlankLinkIcon />}>
              ボタン
            </LinkButton>
            <LinkButton href="https://vitals.ubie.life/" fixedIcon={<BlankLinkIcon />} variant="secondary">
              ボタン
            </LinkButton>
            <LinkButton href="https://vitals.ubie.life/" fixedIcon={<BlankLinkIcon />} variant="accent">
              ボタン
            </LinkButton>
            <LinkButton href="https://vitals.ubie.life/" fixedIcon={<BlankLinkIcon />} variant="alert">
              ボタン
            </LinkButton>
            <LinkButton href="https://vitals.ubie.life/" fixedIcon={<BlankLinkIcon />} variant="text">
              ボタン
            </LinkButton>
            <LinkButton href="https://vitals.ubie.life/" fixedIcon={<TrashIcon />} variant="textAlert">
              ボタン
            </LinkButton>
          </div>
        </dd>
      </Stack>
    </Stack>
  );
};

export default WithIcon;
