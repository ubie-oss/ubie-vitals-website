export const pascalCaseToCSSVariables = (pascalCaseStr: string): string => {
  return `-${pascalCaseStr.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
};
