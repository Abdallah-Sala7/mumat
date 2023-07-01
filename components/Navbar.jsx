import Image from "next/image";

import Logo from "../assets/images/logo.png";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="fixed top-0 left-0 z-40 w-full py-2 shadow-sm bg-dark">
      <div className="container flex items-center justify-between">
        <Link href="/" className="h-14 w-16 flex">
          <Image
            src={Logo}
            alt="logo"
            width={56}
            height={56}
            className="w-full h-full object-contain"
          />
        </Link>

        <ul
          className={`
          fixed top-0 left-0 z-50 bg-dark max-w-full w-72 h-full p-5
          flex flex-col items-center gap-4 transition-transform
          md:flex-row md:static md:w-auto md:p-0 md:gap-2
          ${showMenu ? "translate-x-0" : " -translate-x-full md:-translate-x-0"}
        `}
        >
          <li className="w-full flex items-center justify-between mb-3 md:hidden">
            <Link href="/" className="h-14 w-16 flex">
              <Image
                src={Logo}
                alt="logo"
                width={56}
                height={56}
                className="w-full h-full object-contain"
              />
            </Link>

            <button
              className="w-10 h-10 text-2xl flex items-center justify-center gap-2 font-bold bg-primary rounded-sm text-dark hover:bg-opacity-80"
              onClick={() => setShowMenu(!showMenu)}
            >
              X
            </button>
          </li>

          <li>
            <Link
              href="#"
              className={`
                relative font-normal text-white text-lg capitalize p-2 transition-colors
                after:absolute after:bottom-0 after:left-2 after:h-px after:w-0 after:bg-primary after:transition-all
                hover:after:w-1/2 hover:text-primary
              `}
            >
              home
            </Link>
          </li>

          <li>
            <Link
              href="#"
              className={`
                relative font-normal text-white text-lg capitalize p-2 transition-colors
                after:absolute after:bottom-0 after:left-2 after:h-px after:w-0 after:bg-primary after:transition-all
                hover:after:w-1/2 hover:text-primary
              `}
            >
              about us
            </Link>
          </li>

          <li>
            <Link
              href="#"
              className={`
                relative font-normal text-white text-lg capitalize p-2 transition-colors
                after:absolute after:bottom-0 after:left-2 after:h-px after:w-0 after:bg-primary after:transition-all
                hover:after:w-1/2 hover:text-primary
              `}
            >
              services
            </Link>
          </li>

          <li>
            <Link
              href="portfolio"
              className={`
                relative font-normal text-white text-lg capitalize p-2 transition-colors
                after:absolute after:bottom-0 after:left-2 after:h-px after:w-0 after:bg-primary after:transition-all
                hover:after:w-1/2 hover:text-primary
              `}
            >
              portfolio
            </Link>
          </li>

          <li>
            <Link
              href="#"
              className={`
                relative font-normal text-white text-lg capitalize p-2 transition-colors
                after:absolute after:bottom-0 after:left-2 after:h-px after:w-0 after:bg-primary after:transition-all
                hover:after:w-1/2 hover:text-primary
              `}
            >
              contact us
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setShowMenu(!showMenu)}
          className="w-8 gap-1.5 justify-between flex flex-wrap md:hidden"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
        </button>

        {showMenu && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 z-40 md:hidden"
            onClick={() => setShowMenu(false)}
          ></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
