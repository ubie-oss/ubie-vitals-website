import DesignTokens from '@ubie/design-tokens';
import BaseGrid from './BaseGrid';
import type { FC } from 'react';

const { color } = DesignTokens;

const ColorListBorder: FC = () => {
  return (
    <BaseGrid
      colors={[
        {
          token: color['border-blue'],
        },
        {
          token: color['border-blue-darken'],
        },
        {
          token: color['border-pink'],
        },
        {
          token: color['border-pink-darken'],
        },
        {
          token: color['border-orange'],
        },
        {
          token: color['border-orange-darken'],
        },
        {
          token: color['border-purple'],
        },
        {
          token: color['border-purple-darken'],
        },
        {
          token: color['border-green'],
        },
        {
          token: color['border-green-darken'],
        },
        {
          token: color['border-red'],
        },
        {
          token: color['border-red-darken'],
        },
        {
          token: color['border-black'],
        },
        {
          token: color['border-black-darken'],
        },
      ]}
    ></BaseGrid>
  );
};

export default ColorListBorder;
