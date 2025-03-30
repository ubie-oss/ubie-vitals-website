import iconNames from '@metadata/iconNames.json';

export interface IconItem {
  name: string;
  usage: string;
}

export interface IconData {
  title: string;
  description: string;
  icons: IconItem[];
}

export const extractIconsData = async (frontmatter: { title: string; description: string }): Promise<IconData> => {
  const icons = (iconNames as string[]).map((iconName) => {
    return {
      name: iconName,
      usage: `<Icon icon="${iconName}" />`,
    };
  });

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    icons,
  };
};
