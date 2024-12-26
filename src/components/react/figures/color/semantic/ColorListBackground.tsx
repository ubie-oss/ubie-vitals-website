import DesignTokens from '@ubie/design-tokens';
import BaseGrid from './BaseGrid';
import type { FC } from 'react';

const { color } = DesignTokens;

const ColorListBackground: FC = () => {
  return (
    <BaseGrid
      colors={[
        {
          token: color['background-modal'],
          description: 'Modal表示時の背景色',
        },
        {
          token: color['background-white'],
        },
        {
          token: color['background-blue'],
        },
        {
          token: color['background-blue-darken'],
        },
        {
          token: color['background-blue-inverse'],
        },
        {
          token: color['background-blue-inverse-darken'],
        },
        {
          token: color['background-pink'],
        },
        {
          token: color['background-pink-darken'],
        },
        {
          token: color['background-pink-inverse'],
        },
        {
          token: color['background-pink-inverse-darken'],
        },
        {
          token: color['background-orange'],
        },
        {
          token: color['background-orange-darken'],
        },
        {
          token: color['background-orange-inverse'],
        },
        {
          token: color['background-orange-inverse-darken'],
        },
        {
          token: color['background-purple'],
        },
        {
          token: color['background-purple-darken'],
        },
        {
          token: color['background-purple-inverse'],
        },
        {
          token: color['background-purple-inverse-darken'],
        },
        {
          token: color['background-green'],
        },
        {
          token: color['background-green-darken'],
        },
        {
          token: color['background-green-inverse'],
        },
        {
          token: color['background-green-inverse-darken'],
        },
        {
          token: color['background-red'],
        },
        {
          token: color['background-red-darken'],
        },
        {
          token: color['background-red-inverse'],
        },
        {
          token: color['background-red-inverse-darken'],
        },
        {
          token: color['background-black'],
        },
        {
          token: color['background-black-darken'],
        },
        {
          token: color['background-black-inverse'],
        },
        {
          token: color['background-black-inverse-darken'],
        },
      ]}
    ></BaseGrid>
  );
};

export default ColorListBackground;
