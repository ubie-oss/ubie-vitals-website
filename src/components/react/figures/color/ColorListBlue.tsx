import { extractHueTokens } from '@utils/server/tokens/extractHueTokens.ts';
import ColorListBase from './ColorListBase';
import type { FC } from 'react';

const blueTokens = extractHueTokens('UbieBlue');

const ColorListBlue: FC = () => <ColorListBase tokens={blueTokens}></ColorListBase>;

export default ColorListBlue;
