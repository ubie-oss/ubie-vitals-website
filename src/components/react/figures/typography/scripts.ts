import { pascalCaseToCSSVariables } from '@utils/client';
import type { Token } from './types';

export const convertToTypographyCSS = (sizeToken: Token, lineHeightToken: Token): string => {
  if (!sizeToken.name || !lineHeightToken.name) {
    return '';
  }

  return `font-size: var(${pascalCaseToCSSVariables(sizeToken.name)});
line-height: var(${pascalCaseToCSSVariables(lineHeightToken.name)});
  `;
};

const convertPropsToString = (props: { [key: string]: string }): string => {
  return Object.keys(props).reduce((acc, key) => {
    return `${acc} ${key}="${props[key]}"`;
  }, '');
};

export const convertToTypographyReact = ({
  size,
  leading,
  type,
}: {
  size: string;
  leading?: string;
  type: string;
}): string => {
  const props: { [key: string]: string } = {
    type,
    size,
  };

  if (leading) {
    props.leading = leading;
  }

  if (type === 'heading') {
    props.as = 'h1';
  }

  if (type === 'note') {
    props.as = 'small';
  }

  return `<Text ${convertPropsToString(props)}></Text>`;
};
