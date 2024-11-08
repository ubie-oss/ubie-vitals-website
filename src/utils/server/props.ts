import { default as ubieUiProps } from 'node_modules/@ubie/ubie-ui/dist/props.json';
import type { PropItemType } from 'react-docgen-typescript';

const convertMap = {
  '`fit-content(${CSSLengthPercentage})`': "'fit-content()'",
  '`var(--${string})`': "'var()'",
};

const convertType = (type: string) => {
  if (convertMap[type]) {
    return convertMap[type];
  }

  const match = type.match(/^`\${string}(.*)`$/);
  if (match) {
    return `'${match[1]}'`;
  }

  return type;
};

const typeObjToValues = (type) => {
  console.log(type);
  if (!type.name) {
    return '';
  } else if (type.name === 'union') {
    return type.elements.map((element) => typeObjToValues(element));
  } else if (type.name === 'signature') {
    return type.raw;
  } else if (type.name.startsWith('HTML')) {
    return 'string';
  } else if (type.name === 'ReactNode') {
    return 'ReactNode';
  } else if (type.name === 'literal') {
    return convertType(type.value);
  } else {
    return convertType(type.name);
  }
};

const extractType = (type: PropItemType) => {
  const values = typeObjToValues(type);
  return Array.isArray(values) ? values.flat(Infinity) : values;
};

export const extractPropsFromFile = (filePath: string) => {
  const { props } = ubieUiProps[filePath][0];

  console.dir(props, { depth: null });

  const propsArray: {
    name: string;
    type: string | string[];
    defaultValue: string | number | null;
    required: boolean;
    description: string;
  }[] = Object.entries(props).map(([name, propInfo]) => {
    return {
      name: name,
      type: extractType(propInfo.tsType === undefined ? '' : propInfo.tsType),
      defaultValue: propInfo.defaultValue ? (propInfo.defaultValue.value as string | number) : null,
      required: propInfo.required,
      description: propInfo.description,
    };
  });

  console.dir(propsArray, { depth: null });

  return propsArray;
};
