import DesignTokens from '@ubie/design-tokens';
import CopyButton from '@components/react/CopyButton';
import Table, { Row, TBody, THead, Cell, HeadCell, HeadRow } from '@components/react/Table';
import { pascalCaseToCSSVariables } from '@utils/client/css';
import { getKeys } from '@utils/client/object';
import { descriptions } from './descriptions';
import type { FC } from 'react';

const { radius } = DesignTokens;
const radiusArray = getKeys(radius)
  .map((key) => {
    return {
      key,
      token: radius[key],
    };
  })
  .sort((a, b) => {
    return parseInt(a.token.value, 10) - parseInt(b.token.value, 10);
  });

const deletePrefix = (str: string): string => {
  return str.replace(/^spacing-/, '');
};

const TokenList: FC = () => (
  <Table>
    <THead>
      <HeadRow>
        <HeadCell scope="column">name</HeadCell>
        <HeadCell scope="column">px</HeadCell>
        <HeadCell scope="column">Description</HeadCell>
        <HeadCell scope="column">Copy</HeadCell>
      </HeadRow>
    </THead>
    <TBody>
      {radiusArray.map((radius) => (
        <Row key={radius.key}>
          <Cell rowHeader>{deletePrefix(radius.key)}</Cell>
          <Cell>{radius.token.value}</Cell>
          <Cell>{descriptions[radius.key]}</Cell>
          <Cell>
            <CopyButton
              text={`var(${pascalCaseToCSSVariables(radius.token.name ? radius.token.name : '')})`}
              label="CSS"
            ></CopyButton>
            <CopyButton
              text={`DesignTokens.${radius.token.path?.[0]}['${radius.token.path?.[1]}']`}
              label="JS"
            ></CopyButton>
          </Cell>
        </Row>
      ))}
    </TBody>
  </Table>
);

export default TokenList;
