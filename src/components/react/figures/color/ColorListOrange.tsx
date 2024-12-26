import { extractHueTokens } from '@utils/server/tokens/extractHueTokens.ts';
import ColorListBase from './ColorListBase';
import type { FC } from 'react';

const tokens = extractHueTokens('UbieOrange');

const ColorListOrange: FC = () => <ColorListBase tokens={tokens}></ColorListBase>;

export default ColorListOrange;
