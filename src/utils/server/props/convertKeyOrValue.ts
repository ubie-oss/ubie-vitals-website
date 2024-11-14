import { valueKeywordMap } from '@utils/server/props/valueKeywordMap.ts';

export const convertKeyOrValue = (keyOrValue: string) => {
  const value = valueKeywordMap.get(keyOrValue);

  if (value) {
    return value;
  } else {
    return keyOrValue;
  }
};
