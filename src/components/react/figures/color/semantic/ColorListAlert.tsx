import DesignToken from '@ubie/design-tokens';
import BaseGrid from './BaseGrid';
import type { FC } from 'react';

const { color } = DesignToken;

const ColorListAlert: FC = () => {
  return (
    <BaseGrid
      colors={[
        {
          token: color.alert,
          description: 'エラーや危険性などの警告',
        },
        {
          token: color['alert-darken'],
          description: 'Alert Buttonのhover/clickとしても利用',
        },
        {
          token: color['background-alert'],
          description: 'テキストやコンポーネントなどの背景',
        },
      ]}
    ></BaseGrid>
  );
};

export default ColorListAlert;
