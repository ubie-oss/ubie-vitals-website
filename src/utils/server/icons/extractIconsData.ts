import iconNames from '@metadata/iconNames.json';

export interface IconData {
  title: string;
  description: string;
  icons: string[];
}

export const extractIconsData = async (frontmatter: { title: string; description: string }): Promise<IconData> => {
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    icons: iconNames as string[],
  };
};
