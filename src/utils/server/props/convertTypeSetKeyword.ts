import { flattenDeep } from 'es-toolkit';
import { valueKeywordMap } from '@utils/server/props/valueKeywordMap.ts';

/**
 * 値を省略するために記載された{Spacing}などのキーをxxs,xs,md...などに展開
 */
export const convertTypeSetKeyword = (keyOrValue: string | string[]): string[] => {
  const _keyOrValue = Array.isArray(keyOrValue) ? keyOrValue : [keyOrValue];

  const converted = _keyOrValue.map((k) => {
    const value = valueKeywordMap.get(k);

    if (value) {
      return value;
    } else {
      return k;
    }
  });

  return flattenDeep(converted);
};
