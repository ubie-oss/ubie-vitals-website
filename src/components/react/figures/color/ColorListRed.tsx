import DesignTokens from '@ubie/design-tokens';
import ColorListBase from './ColorListBase';
import type { FC } from 'react';

const blueTokens = Object.values(DesignTokens.color).filter((c) => {
  return c.name?.includes('UbieRed');
});

console.log(Object.values(DesignTokens.color));

const BlueList: FC = () => <ColorListBase tokens={blueTokens}></ColorListBase>;

export default BlueList;
