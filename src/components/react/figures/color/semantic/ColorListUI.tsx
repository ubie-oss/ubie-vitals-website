import DesignToken from '@ubie/design-tokens';
import BaseGrid from './BaseGrid';
import type { FC } from 'react';

const { color } = DesignToken;

const ColorListUI: FC = () => {
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
          token: color['text-white'],
          description: 'Primaryなど、色付きボタンの上に置くテキスト',
        },
        {
          token: color['text-disabled'],
          description: '無効化されている状態のテキスト',
        },
        {
          token: color['text-placeholder'],
          description: 'テキストフィールドのプレースホルダーテキスト',
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
          token: color['background-gray'],
          description: 'テキストやコンポーネントなどの背景',
        },
        {
          token: color['background-white'],
          description: 'テキストやコンポーネントなどの背景',
        },
        {
          token: color['background-modal'],
          description: 'Modal表示時の背景色',
        },
        {
          token: color.overlay,
          description: 'hover / click のときボタンに重ねる汎用色',
        },
      ]}
    ></BaseGrid>
  );
};

export default ColorListUI;
