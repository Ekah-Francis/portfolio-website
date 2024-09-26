/* eslint-disable react/no-unescaped-entities */
import Navbar from "./navbar";

const Header = () => {
  return (
    <header id="home" className="flex flex-col md:h-screen">
      <div className="text-md flex w-full items-center justify-between bg-bgColor px-4 py-6 text-textColor sm:px-8 lg:px-24">
        <Navbar />
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
