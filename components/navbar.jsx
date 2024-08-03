"use client";
import Link from "next/link";
import Logo from "./logo";
import { useState } from "react";
const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggle = () => setMenu((e) => !e);
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
        <button onClick={toggle} className="lg:hidden">
          <svg className="w-8" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10.7666V9.76656H16V10.7666H0ZM0 5.99656V4.99656H16V5.99656H0ZM0 1.22656V0.226562H16V1.22656H0Z" fill="black" />
          </svg>
        </button>
      </nav>
      <div className={`fixed top-0  w-full h-screen z-10 left-0 transition-transform  ${!menu && "-translate-x-full"}`}>
        <div className="relative h-full w-full">
          {/* <span className="bg-main/30 absolute top-0 left-0 w-screen h-screen cursor-pointer"></span> */}
          <div className="bg-white absolute h-screen w-full md:w-1/3 gap-y-10 flex flex-col top-0 left-0">
            <div onClick={() => setMenu(false)} className="cursor-pointer text-3xl w-fit ms-auto p-3 text-primary">
              &#x2715;
            </div>
            <div className="space-y-7">
              <Link className="hover:text-primary px-5 border-b border-b-gray/40 pb-2 hover:underline block text-lg" href="/">
                Home
              </Link>
              <Link className="hover:text-primary px-5 border-b border-b-gray/40 pb-2 hover:underline block text-lg" href="/">
                About
              </Link>
              <Link className="hover:text-primary px-5 border-b border-b-gray/40 pb-2 hover:underline block text-lg" href="/">
                Blog
              </Link>
              <Link className="hover:text-primary px-5 border-b border-b-gray/40 pb-2 hover:underline block text-lg" href="/">
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
