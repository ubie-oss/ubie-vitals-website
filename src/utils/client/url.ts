import { SITE_URL_BASE } from '@constants';

export const siteUrl = (path: string = ''): string => {
  return `${SITE_URL_BASE}${path}`;
};
