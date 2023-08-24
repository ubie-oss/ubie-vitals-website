import CopyButton from '@components/react/CopyButton';
import Table, { Row, TBody, THead, Cell, HeadCell, HeadRow } from '@components/react/Table';
import DesignToken from '@ubie/design-tokens';
import { pascalCaseToCSSVariables } from '@utils/client/css';
import { getKeys } from '@utils/client/object';
import type { FC } from 'react';

const { radius } = DesignToken;
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

console.dir(radiusArray, {
  depth: null,
});

const deletePrefix = (str: string): string => {
  return str.replace(/^spacing-/, '');
};

const descriptions: { [key in keyof typeof radius]: string } = {
  md: '40px ＜ 短辺の長さ の場合に使用',
  full: '角を半円にしたい場合に使用',
  sm: '24px ＜ 短辺の長さ ≦ 40px の場合に使用',
  lg: 'LPなどでの装飾で使用',
  xs: '短辺の長さ ≦ 24px の場合に使用',
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
              text={`DesignToken.${radius.token.path?.[0]}['${radius.token.path?.[1]}']`}
              label="JS"
            ></CopyButton>
          </Cell>
        </Row>
      ))}
    </TBody>
  </Table>
);

export default TokenList;
