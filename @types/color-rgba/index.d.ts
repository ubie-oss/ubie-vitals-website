declare module 'color-rgba' {
  /**
   * @param color - CSS color string.
   * @returns An array containing the RGBA values.
   */
  function rgba(color: string): [number, number, number, number];
  export = rgba;
}
