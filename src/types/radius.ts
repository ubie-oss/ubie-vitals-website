export type RadiusToken = {
  name: string;
  value: string;
  description: string;
  cssVar: string;
  jsPath: string;
};

export type RadiusData = {
  title: string;
  description: string;
  tokens: RadiusToken[];
};
