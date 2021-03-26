import { ApiRoute } from '@ts/strapi-types';

export const getStrapiUrl = (path: string = ''): string => {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
  }${path}`;
};

export const fetchAPI = async (path: ApiRoute): Promise<any> => {
  const requestUrl = getStrapiUrl(path);
  const res = await fetch(requestUrl);
  return await res.json();
};
