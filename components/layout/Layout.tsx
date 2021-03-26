interface Props {
  children: JSX.Element | JSX.Element[] | (JSX.Element | JSX.Element[])[];
}

const Layout: React.FC<Props & React.HTMLAttributes<any>> = ({
  children,
  ...props
}) => {
  return (
    <main
      {...props}
      className={`mx-auto px-4 w-full max-w-3xl ${props.className}`}
    >
      {children}
    </main>
  );
};

export default Layout;
