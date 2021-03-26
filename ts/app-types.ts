import { GlobalProps } from './strapi-types';

export interface PageProps {
  global: GlobalProps;
}

export interface SeoProps {
  metaTitle?: string;
  metaDescription?: string;
}
