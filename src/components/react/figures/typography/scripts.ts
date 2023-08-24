import type { Token } from "./types";
import { pascalCaseToCSSVariables } from "@utils/client";

export const convertToTypographyCSS = (
  sizeToken: Token,
  lineHeightToken: Token
): string => {
  if (!sizeToken.name || !lineHeightToken.name) {
    return "";
  }

  return `font-size: var(${pascalCaseToCSSVariables(sizeToken.name)});
line-height: var(${pascalCaseToCSSVariables(lineHeightToken.name)});
  `;
};
