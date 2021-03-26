import { fetchAPI } from '@lib/api';
import { getStrapiMedia } from '@lib/media';
import '@styles/globals.scss';
import { PageProps } from '@ts/app-types';
import App, { AppContext, AppProps } from 'next/app';
import Head from 'next/head';
import { createContext } from 'react';

export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { global }: PageProps = pageProps;

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
      </Head>
      <GlobalContext.Provider value={global}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  );
};

MyApp.getInitialProps = async (ctx: AppContext) => {
  const appProps = await App.getInitialProps(ctx);
  const global = await fetchAPI('/global');
  return { ...appProps, pageProps: { global } };
};

export default MyApp;
