import DesignTokens from '@ubie/design-tokens';

const extractNumberFromString = (str: string): number => {
  const match = str.match(/(\d+)$/);
  return match ? parseInt(match[1], 10) : 0;
};

export const extractHueTokens = (tokenKey: string) => {
  return Object.values(DesignTokens.color)
    .filter((c) => {
      return c.name?.includes(tokenKey);
    })
    .sort((a, b) => {
      return extractNumberFromString(a.name!) - extractNumberFromString(b.name!);
    });
};
