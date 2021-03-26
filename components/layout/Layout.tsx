interface Props {
  children: JSX.Element | JSX.Element[] | (JSX.Element | JSX.Element[])[];
}

const Layout: React.FC<Props> = ({ children }) => {
  return <div className="mx-auto px-4 w-full max-w-3xl">{children}</div>;
};

export default Layout;
