import { extractHueTokens } from '@utils/server/tokens/extractHueTokens.ts';
import ColorListBase from './ColorListBase';
import type { FC } from 'react';

const redTokens = extractHueTokens('UbieRed');

const ColorListRed: FC = () => <ColorListBase tokens={redTokens}></ColorListBase>;

export default ColorListRed;
