import DesignTokens from '@ubie/design-tokens';
import ColorListBase from './ColorListBase';
import type { FC } from 'react';

const whiteTokens = Object.values(DesignTokens.color).filter((c) => {
  return c.name?.includes('UbieWhite');
});

const ColorListWhite: FC = () => <ColorListBase tokens={whiteTokens}></ColorListBase>;

export default ColorListWhite;
