import { normal } from 'color-blend';
import rgba from 'color-rgba';
import type { DesignToken } from '@types';

type RGBA = {
  r: number;
  g: number;
  b: number;
  a: number;
};

type HEX = `#${string}`;

/**
 * Check if the two colors meet the W3C contrast criteria
 * @param backgroundColor HEX
 * @param forgroundColor HEX
 */
export const validateContrast = (
  backgroundColor: HEX,
  forgroundColor: HEX,
): {
  AA: {
    normal: boolean;
    large: boolean;
  };
  AAA: {
    normal: boolean;
    large: boolean;
  };
} => {
  const contrast = calcContrastConsideringAlpha(backgroundColor, forgroundColor);
  return {
    AA: {
      normal: contrast > 4.5,
      large: contrast > 3,
    },
    AAA: {
      normal: contrast > 7,
      large: contrast > 4.5,
    },
  };
};

/**
 * ex. #16191f0a -> #16191f / 4%
 * If no alpha, return as is
 * @param hex HEX
 * @returns
 */
export function convertHexWithPercentage(hex: HEX) {
  // #始まりじゃなければエラー
  if (!hex.startsWith('#')) {
    throw new Error('Invalid hex string');
  }

  // 文字列が7文字だったらそのまま返す
  if (hex.length === 7) {
    return hex;
  }

  // アルファ値を取得（最後の2桁）
  const alphaHex = hex.slice(7);
  const alpha = parseInt(alphaHex, 16);

  // 100%の場合、6桁部分のみ返す
  if (alpha === 255) {
    return hex.slice(0, 7);
  } else {
    // 100%以外の場合、アルファ値をパーセンテージに変換して形式を整える
    const alphaPercentage = Math.round((alpha / 255) * 100);
    return hex.slice(0, 7) + ' / ' + alphaPercentage + '%';
  }
}

/**
 * ex. 16191f0a -> #16191f
 * @param HEX
 * @returns string
 */
export function deleteAlpha(hex: HEX): string {
  // #始まりじゃなければエラー
  if (!hex.startsWith('#')) {
    throw new Error('Invalid hex string');
  }

  // 文字列が7文字だったらそのまま返す
  if (hex.length === 7) {
    return hex;
  }

  // 8文字目以降を削除して返す
  return hex.slice(0, 7);
}

export function convertDisplayName(colorName: string) {
  return colorName
    .replace(/^Color/g, '')
    .replace(/([A-Z])/g, ' $1')
    .replace(/([0-9]*)$/, ' $1')
    .trim();
}

/**
 * Convert HEX to object with rgba
 * @param hex
 * @returns
 */
export const hexToRGBA = (hex: HEX): RGBA => {
  const rgbaArray = rgba(hex);

  return {
    r: rgbaArray[0],
    g: rgbaArray[1],
    b: rgbaArray[2],
    a: rgbaArray[3],
  };
};

/**
 * Calculation of contrast considering alpha
 * @param backgroundHex
 * @param forgroundHex
 * @returns number
 */
export const calcContrastConsideringAlpha = (backgroundHex: HEX, forgroundHex: HEX): number => {
  const backgroundArray = rgba(backgroundHex);
  const forgroundArray = rgba(forgroundHex);

  const backgroundRGBA: RGBA = {
    r: backgroundArray[0],
    g: backgroundArray[1],
    b: backgroundArray[2],
    a: backgroundArray[3],
  };

  const forgroundRGBA: RGBA = {
    r: forgroundArray[0],
    g: forgroundArray[1],
    b: forgroundArray[2],
    a: forgroundArray[3],
  };

  const blendedBackgroud = blendBackground(backgroundRGBA);
  const blendedForground = normal(blendedBackgroud, forgroundRGBA);

  // 色のコントラストを計算する
  return calcContrast(blendedBackgroud, blendedForground);
};

// 色のコントラストを計算する
export const calcContrast = (background: RGBA, forground: RGBA) => {
  const backgroundLuminance = calcLuminance(background);
  const forgroundLuminance = calcLuminance(forground);

  const darkerLuminence = Math.min(backgroundLuminance, forgroundLuminance);
  const lighterLuminence = Math.max(backgroundLuminance, forgroundLuminance);

  const contrast = (lighterLuminence + 0.05) / (darkerLuminence + 0.05);

  return contrast;
};

/**
 * Calculate luminance from RGBA
 * @param color RGBA
 * @returns number
 */
const calcLuminance = (color: RGBA): number => {
  const { r, g, b } = color;

  const [lumR, lumG, lumB] = [r, g, b].map((component) => {
    const proportion = component / 255;

    return proportion <= 0.03928 ? proportion / 12.92 : Math.pow((proportion + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * lumR + 0.7152 * lumG + 0.0722 * lumB;
};

const white: RGBA = {
  r: 255,
  g: 255,
  b: 255,
  a: 1,
};

/**
 * Composite the given color with white and make it the background color
 * @param background
 * @returns RGBA
 */
export const blendBackground = (background: RGBA) => {
  return normal(white, background);
};

if (import.meta.vitest) {
  const { describe, test, expect } = import.meta.vitest;

  describe('blendBackground()', () => {
    test('Opaque color does not change.', () => {
      expect(blendBackground({ r: 100, g: 150, b: 200, a: 1 })).toStrictEqual({ r: 100, g: 150, b: 200, a: 1 });
    });

    test('Transparent colors are blended.', () => {
      expect(blendBackground({ r: 100, g: 150, b: 200, a: 0.5 })).toStrictEqual({ r: 178, g: 203, b: 228, a: 1 });
    });
  });

  describe('calcContrast()', () => {
    test('White and black have high contrast.', () => {
      expect(calcContrast({ r: 255, g: 255, b: 255, a: 1 }, { r: 0, g: 0, b: 0, a: 1 })).toBe(21);
    });

    test('Blue and red have the lowest contrast.', () => {
      expect(calcContrast({ r: 0, g: 0, b: 255, a: 1 }, { r: 255, g: 0, b: 0, a: 1 })).toBe(2.148936170212766);
    });

    test('Brown and navy blue have the lowest contrast.', () => {
      expect(calcContrast({ r: 143, g: 72, b: 31, a: 1 }, { r: 61, g: 61, b: 138, a: 1 })).toBe(1.3948862820050447);
    });
  });

  describe('calcContrastConsideringAlpha()', () => {
    test('Alpha Black and white have high contrast.', () => {
      expect(calcContrastConsideringAlpha('#16191fa3', '#FFFFFF')).toBe(5.260745717619193);
    });

    test('lite blue and alpha white have high contrast.', () => {
      expect(calcContrastConsideringAlpha('#cbd3f2', '#16191fe5')).toBe(9.414160780055964);
    });

    test('Alpha Black and alpha Pink have low contrast.', () => {
      expect(calcContrastConsideringAlpha('#16191f0a', '#da317080')).toBe(2.099450356723359);
    });

    test('lite gray and dark gray have high contrast', () => {
      expect(calcContrastConsideringAlpha('#16191f0a', '#16191fe5')).toBe(12.253778729538132);
    });
  });
}

export const createColorTokenJsCode = (token: DesignToken): string => {
  return `DesignTokens.${token.path?.[0]}['${token.path?.[1]}']`;
};
