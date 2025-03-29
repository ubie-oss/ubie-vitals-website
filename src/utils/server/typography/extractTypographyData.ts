import type {
  TypographyData,
  TypographySize,
  StyleType,
  TypographyStyleSet,
  FontSizes,
} from '../../../types/typography';

// フォントサイズの定義
// TODO: デザイントークンから取得するようにしたい
const FONT_SIZES: FontSizes = {
  body: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
  },
  heading: {
    xs: '16px',
    sm: '18px',
    md: '20px',
    lg: '24px',
    xl: '28px',
  },
  button: {
    sm: '12px',
    md: '14px',
    lg: '16px',
  },
  tag: {
    md: '12px',
    lg: '14px',
  },
} as const;

const createStyleSet = (type: StyleType, size: TypographySize, defaultLineHeight: string): TypographyStyleSet => {
  if (!(size in FONT_SIZES[type])) {
    throw new Error(`Invalid size "${size}" for type "${type}"`);
  }
  const fontSize = FONT_SIZES[type][size as keyof (typeof FONT_SIZES)[typeof type]];

  return {
    size,
    cssVars: {
      size: `var(--text-${type}-${size}-size)`,
      lineHeight: `var(--text-${type}-${size}-line)`,
    },
    cssProps: {
      fontSize,
      lineHeight: defaultLineHeight,
    },
    reactProps: {
      type,
      size,
    },
  };
};

export const extractTypographyData = async (
  content: string,
  frontmatter: { title: string; description: string },
): Promise<TypographyData> => {
  // フォントフェイスの抽出
  const fontFaceRegex = /Font Face.*?`(.*?)`.*?`(.*?)`/s;
  const fontFaceMatch = content.match(fontFaceRegex);

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    fontFace: {
      regular: fontFaceMatch?.[1] || 'A P-OTF UD Shin Go Pr6N / M',
      bold: fontFaceMatch?.[2] || 'A P-OTF UD Shin Go Pr6N / DB',
    },
    styles: {
      body: [
        createStyleSet('body', 'xs', '170%'),
        createStyleSet('body', 'sm', '170%'),
        createStyleSet('body', 'md', '170%'),
        createStyleSet('body', 'lg', '170%'),
      ],
      heading: [
        createStyleSet('heading', 'xs', '150%'),
        createStyleSet('heading', 'sm', '150%'),
        createStyleSet('heading', 'md', '140%'),
        createStyleSet('heading', 'lg', '140%'),
        createStyleSet('heading', 'xl', '140%'),
      ],
      button: [
        createStyleSet('button', 'sm', '150%'),
        createStyleSet('button', 'md', '150%'),
        createStyleSet('button', 'lg', '150%'),
      ],
      tag: [createStyleSet('tag', 'md', '150%'), createStyleSet('tag', 'lg', '150%')],
    },
  };
};
