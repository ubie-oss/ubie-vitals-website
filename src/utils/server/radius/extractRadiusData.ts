import DesignTokens from '@ubie/design-tokens';
import { pascalCaseToCSSVariables } from '@utils/client/css';
import { getKeys } from '@utils/client/object';
import { descriptions } from '../../../components/react/figures/radius/descriptions';
import type { RadiusData, RadiusToken } from '../../../types/radius';

export const extractRadiusData = async (
  content: string,
  frontmatter: { title: string; description: string },
): Promise<RadiusData> => {
  const { radius } = DesignTokens;

  // DesignTokensからトークンを抽出して整形
  const tokens: RadiusToken[] = getKeys(radius).map((key) => {
    const token = radius[key];
    return {
      name: key,
      value: token.value,
      description: descriptions[key] || '',
      cssVar: `var(${pascalCaseToCSSVariables(token.name || '')})`,
      jsPath: `DesignTokens.${token.path?.[0]}['${token.path?.[1]}']`,
    };
  });

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    tokens,
  };
};
