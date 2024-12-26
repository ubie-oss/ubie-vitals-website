import { extractHueTokens } from '@utils/server/tokens/extractHueTokens.ts';
import ColorListBase from './ColorListBase';
import type { FC } from 'react';

const pinkTokens = extractHueTokens('UbiePink');

const ColorListPink: FC = () => <ColorListBase tokens={pinkTokens}></ColorListBase>;

export default ColorListPink;
