import { NextPage } from 'next';
import { useEffect } from 'react';

const Admin: NextPage = () => {
  useEffect(() => {
    window.location.replace(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/admin`);
  }, []);

  return null;
};

export default Admin;
