import Link from "next/link";
import { PAGE_CONFIG } from "~/constants";
import Hamburger from "../Hamburger";

const Header: React.FC = () => {
  return (
    <header className="container flex w-screen justify-between p-2 px-8">
      <Link
        href="/"
        className="text-center text-xl font-bold tracking-tight text-white lg:text-2xl xl:text-4xl"
      >
        <span className="text-[hsl(720,100%,70%)]">Blank</span> Connect
      </Link>
      <nav className="hidden items-center gap-4 md:flex">
        {PAGE_CONFIG.map((link) => (
          <Link
            className="text-md font-medium tracking-tight text-white lg:text-xl xl:text-2xl"
            key={link.title}
            href={`/${link.title.toLowerCase()}`}
          >
            {link.title.toUpperCase()}
          </Link>
        ))}
      </nav>
      <Hamburger />
    </header>
  );
};

export default Header;
