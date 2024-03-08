import DesignTokens from '@ubie/design-tokens';
import BaseGrid from './BaseGrid';
import type { FC } from 'react';

const { color } = DesignTokens;

const ColorListBranding: FC = () => {
  return (
    <BaseGrid
      colors={[
        {
          token: color.primary,
          description: 'プロダクトの印象を司る色。主要なメッセージやアクション',
        },
        {
          token: color['primary-darken'],
          description: 'Primary Buttonのhover/clickとしても利用',
        },
        {
          token: color['background-primary'],
          description: 'テキストやコンポーネントなどの背景',
        },
        {
          token: color['background-primary-darken'],
          description: 'テキストやコンポーネントなどの背景',
        },
        {
          token: color.accent,
          description: '部分的に注目を向けたい箇所。同じ画面内での多用は避ける',
        },
        {
          token: color['accent-darken'],
          description: 'Accent Buttonのhover/clickとしても利用',
        },
        {
          token: color['background-accent'],
          description: 'テキストやコンポーネントなどの背景',
        },
        {
          token: color['background-accent-darken'],
          description: 'テキストやコンポーネントなどの背景',
        },
      ]}
    ></BaseGrid>
  );
};

export default ColorListBranding;
