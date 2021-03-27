import Layout from '@components/layout/Layout';
import Typography from '@components/typography/Typography';
import { NextPage } from 'next';
import Link from 'next/link';

const Impressum: NextPage = () => {
  return (
    <Layout className="pt-16">
      <Typography variant="heading" className="mb-8">
        Impressum
      </Typography>
      <Link href="/">Zurück</Link>
    </Layout>
  );
};

export default Impressum;
