import { StrapiMedia } from '@ts/strapi-types';
import { getStrapiUrl } from './api';

export const getStrapiMedia = (media: StrapiMedia) => {
  if (typeof media !== 'undefined') {
    if (media === null) {
      return '';
    }
    return media.url.startsWith('/') ? getStrapiUrl(media.url) : media.url;
  }
};
