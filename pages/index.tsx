import Layout from '@components/layout/Layout';
import Seo from '@components/seo/Seo';
import StrapiImage from '@components/strapi-image/StrapiImage';
import { fetchAPI } from '@lib/api';
import { AktuellesProjekt } from '@ts/strapi-types';
import { GetStaticProps, NextPage } from 'next';

interface Props {
  aktuelleProjekte: AktuellesProjekt[];
}

const Home: NextPage<Props> = ({ aktuelleProjekte }) => {
  return (
    <>
      <Seo seo={{ metaTitle: 'Home' }} />
      <Layout>
        <h1 className="text-6xl font-bold mt-16">Aktuelle Projekte</h1>
        {aktuelleProjekte.map((projekt) => (
          <div key={projekt.id}>
            <h2 className="text-3xl font-medium mt-8 mb-4">{projekt.titel}</h2>
            <p>{projekt.untertitel}</p>
            {projekt.bilder.map((bild) => (
              <StrapiImage image={bild} className="my-4" key={bild.id} />
            ))}
          </div>
        ))}
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const aktuelleProjekte: AktuellesProjekt[] = await fetchAPI(
    '/aktuelle-projekte'
  );

  return {
    props: { aktuelleProjekte },
  };
};

export default Home;
