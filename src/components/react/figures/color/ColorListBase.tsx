import DesignToken from '@ubie/design-tokens';
import ColorChip from './ColorChip';
import Grid from '../../Grid';
import type { DesignToken as Token } from '@types';
import type { FC } from 'react';

interface Props {
  tokens: Token[];
}

const ColorListBase: FC<Props> = ({ tokens }) => (
  <Grid minimum="200px" space={DesignToken.size['spacing-sm'].value}>
    {tokens.map((token, index) => {
      return <ColorChip token={token} key={index} />;
    })}
  </Grid>
);

export default ColorListBase;
