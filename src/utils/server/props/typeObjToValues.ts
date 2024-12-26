import { convertInternalTypeToUnderstandableTypes } from '@utils/server';
import type { TsTypeDescriptor } from '@utils/server/props/types.ts';

export const typeObjToValues = (
  type: TsTypeDescriptor,
  {
    includeIcon = false,
  }: {
    includeIcon: boolean;
  },
): string | string[] => {
  if (!type.name) {
    return '';
  } else if ('elements' in type) {
    const t = type.elements.map((element) => typeObjToValues(element, { includeIcon }));
    return t.flat();
  } else if (type.name === 'signature') {
    return type.raw === undefined ? '' : type.raw;
  } else if (type.name === 'ReactNode') {
    return 'ReactNode';
  } else if (type.name === 'literal') {
    return convertInternalTypeToUnderstandableTypes('value' in type ? type.value : '');
  } else if (type.name === 'unknown' && includeIcon) {
    // IconNameはubie-iconsから動的に型が決まるため、unknownとなってしまう
    return "'ubie-iconsのアイコン名'";
  }

  return convertInternalTypeToUnderstandableTypes(type.name);
};
