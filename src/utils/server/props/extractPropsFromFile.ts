import { default as propsJson } from 'node_modules/@ubie/ubie-ui/dist/props.json';
import { deleteDefaultStatement } from '@utils/server/props/deleteDefaultStatement.ts';
import { typeObjToValues } from '@utils/server/props/typeObjToValues.ts';
import type { Prop } from '@types';
import type { TsTypeDescriptor } from '@utils/server/props/types.ts';
import type { Documentation } from 'react-docgen';

const componentProps: Record<string, Documentation[]> = propsJson;

const extractType = (type: TsTypeDescriptor, { includeIcon = false }) => {
  const values = typeObjToValues(type, {
    includeIcon,
  });
  return Array.isArray(values) ? values.flat(Infinity) : values;
};

export const extractPropsFromFile = (filePath: string) => {
  const { props } = componentProps[filePath][0];

  if (props === undefined) {
    throw new Error('no props');
  }

  const propsData: Prop[] = Object.entries(props).map(([name, prop]) => {
    return {
      name: name,
      type:
        prop.tsType !== undefined
          ? extractType(prop.tsType, {
              includeIcon: name.toLowerCase().includes('icon'),
            })
          : '',
      defaultValue: prop.defaultValue !== undefined ? (prop.defaultValue.value as string) : undefined,
      required: prop.required,
      description: deleteDefaultStatement(prop.description === undefined ? '' : prop.description),
    };
  });

  return propsData;
};
