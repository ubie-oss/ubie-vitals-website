export type StyleType = 'body' | 'heading' | 'button' | 'tag';

export type FontSizes = {
  body: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
  heading: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  button: {
    sm: string;
    md: string;
    lg: string;
  };
  tag: {
    md: string;
    lg: string;
  };
};

export type TypographySize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type TypographyData = {
  title: string;
  description: string;
  fontFace: {
    regular: string;
    bold: string;
  };
  styles: {
    body: TypographyStyleSet[];
    heading: TypographyStyleSet[];
    button: TypographyStyleSet[];
    tag: TypographyStyleSet[];
  };
};

export type TypographyStyleSet = {
  size: TypographySize;
  cssVars: {
    size: string;
    lineHeight: string;
  };
  cssProps: {
    fontSize: string;
    lineHeight: string;
  };
  reactProps: {
    type: StyleType;
    size: TypographySize;
  };
};
