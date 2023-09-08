import CopyButton from '@components/react/CopyButton';
import Table, { Row, TBody, THead, Cell, HeadCell, HeadRow } from '@components/react/Table';
import DesignToken from '@ubie/design-tokens';
import { pascalCaseToCSSVariables } from '@utils/client/css';
import { getKeys } from '@utils/client/object';
import type { FC } from 'react';

const { size } = DesignToken;
const sizeArray = getKeys(size)
  .map((key) => {
    return {
      key,
      token: size[key],
    };
  })
  .sort((a, b) => {
    return a.token.original.value - b.token.original.value;
  });

const deletePrefix = (str: string): string => {
  return str.replace(/^spacing-/, '');
};

const descriptions: { [key in keyof typeof size]: string } = {
  'spacing-xxs': '極小の値',
  'spacing-xs': 'タグ内のpadding、アイコンとテキストのmarginなど、小さめの余白',
  'spacing-sm': '調整用',
  'spacing-md': 'ボタン内のpadding、近接させたいリスト要素のmargin、など',
  'spacing-lg': 'コンテンツ間のmargin',
  'spacing-xl': 'コンテンツ間のmargin',
  'spacing-xxl': '極大の値',
};

const TokenList: FC = () => (
  <Table>
    <THead>
      <HeadRow>
        <HeadCell scope="column">name</HeadCell>
        <HeadCell scope="column">px</HeadCell>
        <HeadCell scope="column">rem</HeadCell>
        <HeadCell scope="column">Description</HeadCell>
        <HeadCell scope="column">Copy</HeadCell>
      </HeadRow>
    </THead>
    <TBody>
      {sizeArray.map((size) => (
        <Row key={size.key}>
          <Cell rowHeader>{deletePrefix(size.key)}</Cell>
          <Cell>{size.token.attributes?.note}</Cell>
          <Cell>{size.token.value}</Cell>
          <Cell>{descriptions[size.key]}</Cell>
          <Cell>
            <CopyButton
              text={`var(${pascalCaseToCSSVariables(size.token.name ? size.token.name : '')})`}
              label="CSS"
            ></CopyButton>
            <CopyButton text={`DesignToken.${size.token.path?.[0]}['${size.token.path?.[1]}']`} label="JS"></CopyButton>
          </Cell>
        </Row>
      ))}
    </TBody>
  </Table>
);

export default TokenList;
