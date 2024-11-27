export const convertMap = new Map<string, string>();

convertMap.set('`fit-content(${CSSLengthPercentage})`', "'fit-content()'");
convertMap.set('`var(--${string})`', "'var()'");

export const convertInternalTypeToUnderstandableTypes = (type: string) => {
  if (convertMap.has(type)) {
    return convertMap.get(type)!;
  }

  // InputHTMLAttributes['children'] -> ReactNode
  if (type.endsWith("['children']")) {
    return 'ReactNode';
  }

  if (type === "HTMLButtonElement['type']") {
    return ["'submit'", "'button'", "'reset'"];
  }

  if (type.startsWith('HTMLElementTagName')) {
    return "'HTMLの要素名'";
  }

  // ${string}cap → cap
  const match = type.match(/^`\${string}(.*)`$/);
  if (match) {
    return `'${match[1]}'`;
  }

  return type;
};
