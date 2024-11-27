// react-docgenではdescriptionに@default XXX表記が残ってしまう
export const deleteDefaultStatement = (type: string) => {
  return type.replace(/^@default.*/gm, '');
};
