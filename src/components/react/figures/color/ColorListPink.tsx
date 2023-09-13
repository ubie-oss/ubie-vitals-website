import DesignTokens from '@ubie/design-tokens';
import ColorListBase from './ColorListBase';
import type { FC } from 'react';

const pinkTokens = Object.values(DesignTokens.color).filter((c) => {
  return c.name?.includes('UbiePink');
});

const ColorListPink: FC = () => <ColorListBase tokens={pinkTokens}></ColorListBase>;

export default ColorListPink;
