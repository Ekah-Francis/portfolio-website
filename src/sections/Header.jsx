import { useState } from "react";
import { navLinks } from "../data";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header id="home" className="flex flex-col md:h-screen">
      {/* Top logo and navigation */}
      <div className="fixed left-0 right-0 top-0 z-10 w-full shadow-md">
        <div className="text-md flex items-center justify-between bg-bgColor px-4 py-6 text-textColor sm:px-8 lg:px-24">
          <div>
            <a href="#" className="font-ChoplinBlack text-xl">
              Ekah <span className="text-gradient">Francis</span>
            </a>
          </div>

          {/* Hamburger Icon */}
          <img
            src="/images/hamburger.png"
            className="block h-7 sm:hidden"
            onClick={() => setShowMenu(true)}
          />

          {/* Hamburger Menu */}
          {showMenu && (
            <>
              <div
                className="relative z-40 flex justify-end sm:hidden"
                data-showMenu={showMenu}
              >
                <img
                  src="/images/close.png"
                  className="mr-1 mt-1 h-8 w-8"
                  onClick={() => setShowMenu(false)}
                />
              </div>
              <ul
                className="fixed inset-0 z-30 flex h-full touch-none flex-col items-center justify-center bg-white/[0.98] sm:hidden"
                data-showMenu={showMenu}
              >
                {navLinks.map((link, i) => (
                  <li
                    key={i}
                    className="my-4 font-PoppinsMedium text-3xl capitalize underline "
                  >
                    <a href={`#${link}`} onClick={() => setShowMenu(false)}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* Normal Navigation */}
          <nav className="hidden sm:block">
            <ul className="flex w-96 justify-between font-PoppinsLight">
              {navLinks.map((link, i) => (
                <li
                  key={i}
                  className="link relative capitalize transition-all hover:scale-[1.15] hover:font-PoppinsMedium"
                >
                  <a href={`#${link}`}>{link}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="h-content container mt-[76px] flex flex-col-reverse items-center justify-center py-16 text-center md:flex-1 md:flex-row md:py-0 md:text-left">
        {/* Hero text content */}
        <div className="max-w-[500px] pt-5">
          <p className="font-PoppinsMedium text-sm leading-[0] md:leading-none ">
            Hi there, I'm Ekah Francis
          </p>
          <h1 className="my-3 font-PoppinsBold text-4xl md:text-5xl lg:text-6xl">
            I'm a <span className="text-gradient">Front-End</span> Web Developer
          </h1>
          <p className="text-muted mx-auto my-4 max-w-[400px] md:mx-0">
            I design and develop experience that makes people's life simple.
            Let's collaborate to create something extraordinary!
          </p>
          <a
            href="#projects"
            className="bg-gradient mx-auto my-4 block w-max rounded-md px-4 py-2 font-PoppinsBold text-white shadow-sm transition-all hover:scale-110 md:mx-0"
          >
            Explore My Work &rarr;
          </a>
        </div>

        {/* Hero Image */}
        <div className=" ">
          <img
            src="/images/Psite1.svg"
            className="w-[370px] md:w-[720px] lg:w-[900px] xl:w-[1000px]"
            alt="hero Image"
            loading="lazy"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
