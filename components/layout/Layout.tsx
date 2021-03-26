import { NextPage } from 'next';

interface Props {
  children: JSX.Element | JSX.Element[] | (JSX.Element | JSX.Element[])[];
}

const Layout: NextPage<Props> = ({ children }) => {
  return <div className="mx-auto px-4 w-full max-w-3xl">{children}</div>;
};

export default Layout;
