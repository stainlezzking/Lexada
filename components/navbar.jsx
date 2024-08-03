import Link from "next/link";
import Logo from "./logo";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center py-5 text-main page-padding">
        <div>
          <Logo />
        </div>
        <ul className="flex gap-8 max-lg:hidden">
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
        <Link href="/more" className="button text-white max-lg:hidden">
          Read More
        </Link>
        <button>
          <svg className="w-8" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10.7666V9.76656H16V10.7666H0ZM0 5.99656V4.99656H16V5.99656H0ZM0 1.22656V0.226562H16V1.22656H0Z" fill="black" />
          </svg>
        </button>
      </nav>
      <div className="fixed top-0 left-0 w-full h-screen z-10 hidden">
        <div className="relative h-full w-full">
          <span className="bg-main/30 absolute top-0 left-0 w-screen h-screen cursor-pointer"></span>
          <div className="bg-white absolute h-screen w-1/2 md:w-1/3 flex items-center top-0 left-0">
            <div className="space-y-7">
              <Link className="hover:text-primary px-2 hover:underline block" href="/">
                Home
              </Link>
              <Link className="hover:text-primary px-2 hover:underline block" href="/">
                About
              </Link>
              <Link className="hover:text-primary px-2 hover:underline block" href="/">
                Blog
              </Link>
              <Link className="hover:text-primary px-2 hover:underline block" href="/">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
