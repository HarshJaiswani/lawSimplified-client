import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { SiSimpleanalytics } from "react-icons/si";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useWindow } from "../hooks/getWindow";

const Navbar = () => {
  const navRef = useRef();
  const { width } = useWindow();
  const [toggleSideNav, setToggleSideNav] = useState(false);
  const router = useRouter();
  const navLinks = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Services",
      href: "/services",
    },
    {
      text: "Blogs",
      href: "/blogs",
    },
    {
      text: "Tools",
      href: "/tools",
    },
    {
      text: "Contact",
      href: "/contact",
    },
  ];
  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setToggleSideNav(false);
      }
    });
  }, []);
  return (
    <>
      <div className="pt-[10vh]"></div>
      <div
        className={`z-[2] shadow-sm fixed top-0 left-0 bg-white w-full h-[10vh] flex justify-center items-center`}
      >
        <div className="w-full px-8 mx-auto flex items-center justify-between">
          <div className="w-fit h-[35px] rounded-full flex items-center">
            <SiSimpleanalytics className="text-[crimson] text-2xl mr-2" />
            <span className="text-black font-semibold text-lg">
              Law Simplified
            </span>
          </div>
          <span
            onClick={() => setToggleSideNav(true)}
            className="block absolute right-8"
          >
            {" "}
            <FaBars className="lg:hidden" />
          </span>
          {width >= 1024 ? (
            <ul className="flex bg-white items-center justify-between">
              {navLinks.map((link, index) => (
                <Link href={link.href} key={index}>
                  <a>
                    <li
                      className={`mx-2 px-3 py-1.5 tracking-wide border-b-2 border-white hover:border-[crimson] hover:text-black cursor-pointer font-semibold ${
                        router.asPath == link.href
                          ? "text-black"
                          : "text-gray-300"
                      }`}
                    >
                      {link.text}
                    </li>
                  </a>
                </Link>
              ))}
            </ul>
          ) : (
            <ul
              className={`${
                toggleSideNav
                  ? "transition-all flex flex-col translate-x-0 z-[2] absolute top-0 right-0 w-[70%] md:w-[50%] h-screen bg-white items-center"
                  : "translate-x-[200px]"
              }`}
              ref={navRef}
            >
              <AiOutlineClose
                className="lg:hidden block ml-auto my-5 mb-12 mx-7"
                onClick={() => setToggleSideNav(false)}
              />
              {navLinks.map((link, index) => (
                <Link href={link.href} key={index}>
                  <a
                    onClick={() => setToggleSideNav(false)}
                    className="w-[80%] mx-auto text-center block"
                  >
                    <li
                      className={`mx-2 px-3 py-1.5 bg-gray-100 w-full rounded-md my-2 tracking-wide border-b-2 border-white hover:border-[crimson] hover:text-black cursor-pointer font-semibold ${
                        router.asPath == link.href
                          ? "text-black"
                          : "text-gray-300"
                      }`}
                    >
                      {link.text}
                    </li>
                  </a>
                </Link>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
