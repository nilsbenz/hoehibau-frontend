import { getStrapiMedia } from '@lib/media';
import { SeoProps } from '@ts/app-types';
import { GlobalProps } from '@ts/strapi-types';
import { NextPage } from 'next';
import Head from 'next/head';
import { useContext } from 'react';
import { GlobalContext } from '../../pages/_app';

interface Props {
  seo?: SeoProps;
}

const Seo: NextPage<Props> = ({ seo }) => {
  const { defaultSeo, siteName } = useContext(GlobalContext) as GlobalProps;

  const seoWithDefaults = {
    ...defaultSeo,
    ...seo,
  };

  const fullSeo = {
    ...seoWithDefaults,
    metaTitle:
      seoWithDefaults.metaTitle === siteName
        ? siteName
        : `${seoWithDefaults.metaTitle} | ${siteName}`,
    shareImage: getStrapiMedia(seoWithDefaults.shareImage),
  };

  return (
    <Head>
      {fullSeo.metaTitle && (
        <>
          <title>{fullSeo.metaTitle}</title>
          <meta property="og:title" content={fullSeo.metaTitle} />
          <meta name="twitter:title" content={fullSeo.metaTitle} />
        </>
      )}
      {fullSeo.metaDescription && (
        <>
          <meta name="description" content={fullSeo.metaDescription} />
          <meta property="og:description" content={fullSeo.metaDescription} />
          <meta name="twitter:description" content={fullSeo.metaDescription} />
        </>
      )}
      {fullSeo.shareImage && (
        <>
          <meta name="image" content={fullSeo.shareImage} />
          <meta property="og:image" content={fullSeo.shareImage} />
          <meta name="twitter:image" content={fullSeo.shareImage} />
        </>
      )}
      <meta name="twitter:card" content="summary" />
    </Head>
  );
};

export default Seo;
