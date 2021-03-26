import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-4 mt-16">
      <div className="mx-auto px-4 w-full max-w-3xl flex place-content-between">
        <p>© 2021 hoehibau.ch</p>
        <Link href="/impressum">Impressum</Link>
      </div>
    </footer>
  );
};

export default Footer;
