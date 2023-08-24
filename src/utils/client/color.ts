// ref: https://www.w3.org/TR/WCAG21/#dfn-relative-luminance
function luminance(r: number, g: number, b: number) {
  const [lumR, lumG, lumB] = [r, g, b].map((component) => {
    const proportion = component / 255;

    return proportion <= 0.03928 ? proportion / 12.92 : Math.pow((proportion + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * lumR + 0.7152 * lumG + 0.0722 * lumB;
}

function contrastRatio(luminance1: number, luminance2: number) {
  const lighterLum = Math.max(luminance1, luminance2);
  const darkerLum = Math.min(luminance1, luminance2);

  return (lighterLum + 0.05) / (darkerLum + 0.05);
}

export function checkContrast(color1: string, color2: string) {
  const [luminance1, luminance2] = [color1, color2].map((color) => {
    /* Remove the leading hash sign if it exists */
    color = color.startsWith('#') ? color.slice(1) : color;

    const r = parseInt(color.slice(0, 2), 16);
    const g = parseInt(color.slice(2, 4), 16);
    const b = parseInt(color.slice(4, 6), 16);

    return luminance(r, g, b);
  });

  return contrastRatio(luminance1, luminance2);
}

// ref: https://medium.com/tamman-inc/create-your-own-color-contrast-checker-11d8b95dff5b
export const validateContrast = (
  color1: string,
  color2: string,
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
  const contrast = checkContrast(color1, color2);
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

export function convertHexWithAlpha(hex: string) {
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

export function convertDisplayName(colorName) {
  return colorName
    .replace(/^Color/g, '')
    .replace(/([A-Z])/g, ' $1')
    .replace(/([0-9]*)$/, ' $1')
    .trim();
}
