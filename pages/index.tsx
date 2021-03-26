import Footer from '@components/footer/Footer';
import Layout from '@components/layout/Layout';
import Seo from '@components/seo/Seo';
import Slider from '@components/slider/Slider';
import Typography from '@components/typography/Typography';
import { fetchAPI } from '@lib/api';
import classes from '@styles/index.module.scss';
import { AktuellesProjekt } from '@ts/strapi-types';
import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const revealHeadingOnScroll = (element: HTMLElement) => () => {
  if (window.scrollY / window.innerHeight > 0.4) {
    if (element.classList.contains(classes['heading--hidden'])) {
      element.classList.add(classes['heading--visible']);
      element.classList.remove(classes['heading--hidden']);
    }
  } else {
    if (element.classList.contains(classes['heading--visible'])) {
      element.classList.remove(classes['heading--visible']);
      element.classList.add(classes['heading--hidden']);
    }
  }
};

interface Props {
  aktuelleProjekte: AktuellesProjekt[];
}

const Home: NextPage<Props> = ({ aktuelleProjekte }) => {
  const heading = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (heading.current) {
      document.addEventListener(
        'scroll',
        revealHeadingOnScroll(heading.current)
      );
      return document.removeEventListener(
        'scroll',
        revealHeadingOnScroll(heading.current)
      );
    }
  }, []);

  return (
    <>
      <Seo seo={{ metaTitle: 'Startseite' }} />
      <div className={classes.landing}>
        <Image
          src="/wood.jpg"
          layout="fill"
          className={classes['landing-image']}
        />
        <div className={classes['landing-content']}>
          <div className={classes['landing-text']}>
            <div className={classes['landing-text-heading']}>
              <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-bold">
                Höhibau AG
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">
                Hundwil - Gonten
              </h2>
            </div>
            <div>
              <p>
                Willkommen bei Höhibau AG! Wir freuen uns sehr, dass Sie zu uns
                ins Appenzellerland gefunden haben. Was können wir für Sie tun?
                Wir sind Spezialist für den Werkstoff Holz.
              </p>
            </div>
          </div>
        </div>
      </div>
      <header className={classes.header}>
        <div>
          <h1
            className={`text-2xl font-bold mr-2 ${classes['heading']} ${classes['heading--hidden']}`}
            ref={heading}
          >
            Höhibau AG
          </h1>
          <nav>
            <div className="flex-grow" />
            <Link href="/zimmerei">
              <a className="mr-1">
                <button>Zimmerei</button>
              </a>
            </Link>
            <Link href="/schreinerei">
              <a className="mr-1">
                <button>Schreinerei</button>
              </a>
            </Link>
            <Link href="/team">
              <a>
                <button>Team</button>
              </a>
            </Link>
          </nav>
        </div>
      </header>
      <Layout>
        <Typography variant="title" className="mt-20 md:mt-28 mb-4 sm:mb-8">
          Was bieten wir?
        </Typography>
        <Typography>Folgende Arbeiten erledigen wir für Sie:</Typography>
        <ul className="list-disc list-inside my-4">
          <li>Holzbauarbeiten für Wohn-, Gewerbe- und Landwirtschaftsbau</li>
          <li>Schreinerarbeiten aller Art</li>
          <li>Einbauküchen</li>
          <li>Innenausbauarbeiten</li>
          <li>CAD-gestützte Projektierungs-/und Ausführungsplanung</li>
          <li>Bauberatungen</li>
        </ul>
        <Typography>
          <strong>Wir erfüllen Ihre Träume!</strong>
        </Typography>
        <Typography variant="title" className="mt-20">
          Aktuelle Projekte
        </Typography>
        {aktuelleProjekte.map((projekt) => (
          <div key={projekt.id}>
            <Typography variant="subtitle" className="mt-4 sm:mt-8">
              {projekt.titel}
            </Typography>
            <Typography variant="body-secondary">
              {projekt.untertitel}
            </Typography>
            <Slider images={projekt.bilder} className="mt-4 mb-24" />
          </div>
        ))}
        <Typography variant="title" className="mt-20 md:mt-28 mb-4 sm:mb-8">
          Aktuelles
        </Typography>
        <Typography variant="subtitle" className="mt-8 mb-2">
          Lehrstelle
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, quis
          iure. Eveniet facere enim vero animi voluptatum eum magni dolores
          quam, est rerum temporibus? Cum dolorum praesentium sint, unde,
          assumenda, labore tempora consequuntur aliquid error omnis neque! Vel
          consequatur quos possimus impedit, fugit, voluptatem quibusdam
          adipisci esse officia, natus ex!
        </Typography>
        <Typography variant="subtitle" className="mt-8 mb-2">
          Lehrstelle
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, quis
          iure. Eveniet facere enim vero animi voluptatum eum magni dolores
          quam, est rerum temporibus? Cum dolorum praesentium sint, unde,
          assumenda, labore tempora consequuntur aliquid error omnis neque! Vel
          consequatur quos possimus impedit, fugit, voluptatem quibusdam
          adipisci esse officia, natus ex!
        </Typography>
      </Layout>
      <Footer />
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
