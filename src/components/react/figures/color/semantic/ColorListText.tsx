import DesignTokens from '@ubie/design-tokens';
import BaseGrid from './BaseGrid';
import type { FC } from 'react';

const { color } = DesignTokens;

const ColorListText: FC = () => {
  return (
    <BaseGrid
      colors={[
        {
          token: color['text-main'],
          description: 'テキストの基本色',
        },
        {
          token: color['text-sub'],
          description: 'Text Mainに対して副次的なテキスト',
        },
        {
          token: color['text-link'],
          description: 'テキストリンク。下線を推奨',
        },
        {
          token: color['text-link-sub'],
          description: '目立たせなくても良いリンク。下線を推奨',
        },
        {
          token: color['text-placeholder'],
          description: 'テキストフィールドのプレースホルダーテキスト',
        },
        {
          token: color['text-disabled'],
          description: '無効化されている状態のテキスト',
        },
        {
          token: color['text-blue'],
        },
        {
          token: color['text-blue-darken'],
        },
        {
          token: color['text-pink'],
        },
        {
          token: color['text-pink-darken'],
        },
        {
          token: color['text-orange'],
        },
        {
          token: color['text-orange-darken'],
        },
        {
          token: color['text-purple'],
        },
        {
          token: color['text-purple-darken'],
        },
        {
          token: color['text-green'],
        },
        {
          token: color['text-green-darken'],
        },
        {
          token: color['text-red'],
        },
        {
          token: color['text-red-darken'],
        },
        {
          token: color['text-black'],
        },
        {
          token: color['text-black-darken'],
        },
      ]}
    ></BaseGrid>
  );
};

export default ColorListText;
