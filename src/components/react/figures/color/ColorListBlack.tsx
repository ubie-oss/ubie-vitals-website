import DesignTokens from '@ubie/design-tokens';
import ColorListBase from './ColorListBase';
import type { FC } from 'react';

const blackTokens = Object.values(DesignTokens.color).filter((c) => {
  return c.name?.includes('UbieBlack');
});

const ColorListBlack: FC = () => <ColorListBase tokens={blackTokens}></ColorListBase>;

export default ColorListBlack;
