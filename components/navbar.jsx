"use client";
import Link from "next/link";
import Logo from "./logo";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  useEffect(function () {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease-in-out", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
    AOS.refresh();
  }, []);
  useEffect(
    function () {
      setMenu(false);
    },
    [pathname]
  );
  const toggle = () => setMenu((e) => !e);
  return (
    <>
      <nav className="flex justify-between items-center py-5 text-main page-padding border-b-2 border-b-gray/50">
        <Link href="/">
          <Logo />
        </Link>
        <ul className="flex gap-8 max-lg:hidden">
          <li>
            <Link className={`${pathname == "/" && "border-b-4"} hover:text-primary py-2 px-3  border-b-primary`} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={`${pathname == "/about" && "border-b-4"} hover:text-primary py-2 px-3  border-b-primary`} href="/about">
              About
            </Link>
          </li>
          <li>
            <Link
              className={`${
                (pathname.startsWith("/listings") || pathname == "/estates") && "border-b-4"
              } hover:text-primary py-2 px-3  border-b-primary`}
              href="/estates"
            >
              Estates
            </Link>
          </li>
          <li>
            <Link className={`${pathname.startsWith("/blogs") && "border-b-4"} hover:text-primary py-2 px-3  border-b-primary`} href="/blogs">
              Blog
            </Link>
          </li>
          <li>
            <Link className={`${pathname == "/contact" && "border-b-4"} hover:text-primary py-2 px-3  border-b-primary`} href="/contact">
              Contact
            </Link>
          </li>
        </ul>
        {pathname !== "/inspection" ? (
          <Link href="/inspection" className="button text-white max-lg:hidden">
            Book an Inspection
          </Link>
        ) : (
          <span className="max-lg:hidden"> </span>
        )}
        <button role="menuitem" aria-label="Toggle menu" onClick={toggle} className="lg:hidden">
          <svg className="w-8" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10.7666V9.76656H16V10.7666H0ZM0 5.99656V4.99656H16V5.99656H0ZM0 1.22656V0.226562H16V1.22656H0Z" fill="black" />
          </svg>
        </button>
      </nav>
      <div className={`fixed top-0  w-full h-screen z-10 left-0 transition-transform  ${!menu && "-translate-x-full"}`}>
        <div className="relative h-full w-full">
          {/* <span className="bg-main/30 absolute top-0 left-0 w-screen h-screen cursor-pointer"></span> */}
          <div className="bg-white absolute h-screen w-full gap-y-10 flex flex-col top-0 left-0">
            <div onClick={() => setMenu(false)} className="cursor-pointer text-3xl w-fit ms-auto p-3 text-primary">
              &#x2715;
            </div>
            <div className="space-y-7">
              <Link
                className={` ${
                  pathname == "/" && "font-medium text-main"
                } hover:text-primary px-5 border-b border-b-gray/40 pb-2 hover:underline block text-lg`}
                href="/"
              >
                Home
              </Link>
              <Link
                className={` ${
                  pathname == "/about" && "font-medium text-main"
                } hover:text-primary px-5 border-b border-b-gray/40 pb-2 hover:underline block text-lg`}
                href="/about"
              >
                About
              </Link>
              <Link
                className={` ${
                  pathname == "/estates" && "font-medium text-main"
                } hover:text-primary px-5 border-b border-b-gray/40 pb-2 hover:underline block text-lg`}
                href="/estates"
              >
                Estates
              </Link>
              <Link
                className={` ${
                  pathname == "/blogs" && "font-medium text-main"
                } hover:text-primary px-5 border-b border-b-gray/40 pb-2 hover:underline block text-lg`}
                href="/blogs"
              >
                Blog
              </Link>
              <Link
                className={` ${
                  pathname == "/contact" && "font-medium text-main"
                } hover:text-primary px-5 border-b border-b-gray/40 pb-2 hover:underline block text-lg`}
                href="/contact"
              >
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
