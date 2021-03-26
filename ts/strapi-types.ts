export type ApiRoute = '/global' | '/aktuelle-projekte';

export interface StrapiMediaFormat {
  url: string;
  name: string;
  width: number;
  height: number;
}

export interface StrapiMedia {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    thumbnail?: StrapiMediaFormat;
    small?: StrapiMediaFormat;
    medium?: StrapiMediaFormat;
    large?: StrapiMediaFormat;
  };
  url: string;
}

export interface GlobalProps {
  id: number;
  siteName: string;
  defaultSeo: {
    id: number;
    metaTitle: string;
    metaDescription: string;
    shareImage: StrapiMedia;
  };
  favicon: StrapiMedia;
}

export interface AktuellesProjekt {
  id: number;
  titel: string;
  untertitel: string;
  bilder: StrapiMedia[];
}
