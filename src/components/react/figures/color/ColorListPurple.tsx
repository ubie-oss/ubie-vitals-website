import { extractHueTokens } from '@utils/server/tokens/extractHueTokens.ts';
import ColorListBase from './ColorListBase';
import type { FC } from 'react';

const tokens = extractHueTokens('UbiePurple');

const ColorListPurple: FC = () => <ColorListBase tokens={tokens}></ColorListBase>;

export default ColorListPurple;
