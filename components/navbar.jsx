import Link from "next/link";
import Logo from "./logo";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-5 ">
      <div>
        <Logo />
      </div>
      <ul className="flex gap-8">
        <li>
          <Link className="hover:text-primary" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:text-primary" href="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="hover:text-primary" href="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="hover:text-primary" href="/blogs">
            Blog
          </Link>
        </li>
        <li>
          <Link className="hover:text-primary" href="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <Link href="/more" className="button text-white">
        Read More
      </Link>
    </nav>
  );
};

export default Navbar;
