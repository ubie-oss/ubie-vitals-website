import DesignTokens from '@ubie/design-tokens';
import ColorListBase from './ColorListBase';
import type { FC } from 'react';

const redTokens = Object.values(DesignTokens.color).filter((c) => {
  return c.name?.includes('UbieRed');
});

const ColorListRed: FC = () => <ColorListBase tokens={redTokens}></ColorListBase>;

export default ColorListRed;
