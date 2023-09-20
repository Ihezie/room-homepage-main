import hamburger from "../assets/images/icon-hamburger.svg";
import logo from "../assets/images/logo.svg";
import Link from "./Link";
import close from "../assets/images/icon-close.svg";

import { useState } from "react";

const links = ["home", "shop", "about", "contact"];

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <>
      <header className="h-20 z-50 flex items-center justify-center px-4 absolute w-full top-0 lg:w-3/5 lg:justify-start lg:pl-20 gap-8 lg:mt-10">
        <img
          src={hamburger}
          alt="hamburger"
          className="absolute left-4 cursor-pointer lg:hidden"
          onClick={() => {
            setShowLinks(true);
          }}
        />
        <img src={logo} alt="logo" />
        <nav
          className={`flex items-center justify-between w-full bg-white absolute px-4 top-0 h-24 ease-linear lg:translate-y-0 lg:bg-transparent lg:text-white lg:w-max lg:h-max lg:static ${
            showLinks ? "translate-y-0" : "translate-y-[-100%]"
          }`}
        >
          <img
            src={close}
            alt="close"
            className="cursor-pointer lg:hidden"
            onClick={() => {
              setShowLinks(false);
            }}
          />
          <ul className="flex">
            {links.map((link, index) => (
              <Link link={link} key={index} />
            ))}
          </ul>
        </nav>
      </header>
      <div
        className={`fixed h-screen bg-black/50 w-screen top-0 bottom-0 left-0 right-0 duration-500 lg:invisible lg:z-[-10] lg:opacity-0 ${
          showLinks ? "visible z-10 opacity-100" : "invisible z-[-10] opacity-0"
        }`}
      ></div>
    </>
  );
};
export default Navbar;
