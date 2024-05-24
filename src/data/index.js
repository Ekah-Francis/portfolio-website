const about = `
 
Hello! I'm Ekah Francis, a passionate Frontend Developer with advanced knowledge in HTML, CSS, JavaScript, and Bootstrap. I specialize in creating dynamic, user-friendly websites and applications that provide seamless user experiences. With a keen eye for detail and a strong commitment to clean, efficient code, I strive to bring designs to life in the most captivating and functional ways possible.

Currently, I am expanding my skill set by diving into backend development. My goal is to become a Fullstack Web Developer, capable of handling both frontend and backend challenges to deliver comprehensive and robust web solutions.
    `;

const skills = [
  { name: "html & css", logo: "/images/html-css.webp" },
  // { name: "sass", logo: "/images/Sass-logo.png" },
  { name: "Bootstrap", logo: "/images/Bot.png" },
  { name: "javascript", logo: "/images/JavaScript-logo.svg" },
  { name: "react", logo: "/images/react-logo.svg" },
];

const projects = [
  // {
  //   title: "24x7Library",
  //   image: "/images/Library.png",
  //   desc: "Allows user to manage their book list by adding book and persisting the data in local storage. Made with HTML, TailwindCSS, and Vanilla JavaScript.",
  //   codeLink:
  //     "https://github.com/M-Taha-Amin/the-odin-project/tree/main/Library",
  //   liveLink: "https://m-taha-amin.github.io/the-odin-project/Library/dist/",
  // },
  {
    title: "E-commerce Template",
    image: "/images/ecome.png",
    desc: "This is an Ecommerce website Template made with HTM, CSS and JAVASCIPT",
    codeLink: "https://github.com/Ekah-Francis/Ecommerce",
    liveLink: "https://ecommerce-umber-two-49.vercel.app/",
  },
  {
    title: "Image search app",
    image: "/images/image-search.png",
    desc: "Search and view beautiful images online with this website",
    codeLink: "https://github.com/Ekah-Francis/image-search-app",
    liveLink: "https://image-search-app-henna.vercel.app/",
  },
  {
    title: "Countries List",
    image: "/images/countries-app.png",
    desc: "Pulls data from REST API stored in json file and renders it with React + TailwindCSS. Dark Mode Feature also available.",
    codeLink: "https://github.com/Ekah-Francis/countrylist",
    liveLink: "https://countrylist-fawn.vercel.app/",
  },
];

const navLinks = ["home", "about", "projects", "contact"];

export { about, skills, navLinks, projects };
