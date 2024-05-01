export type DesignToken = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  name?: string;
  comment?: string;
  themeable?: boolean;
  attributes?: {
    category?: string;
    type?: string;
    item?: string;
    subitem?: string;
    state?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export type PostData = {
  title: string;
  description: string;
  url: string;
  thumbnail?: string;
  id?: string;
};

export type Spacing = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export const BreakPoint = {
  mobile: '320px',
  tablet: '640px',
  desktop: '768px',
} as const;
export type BreakPoint = keyof typeof BreakPoint;
