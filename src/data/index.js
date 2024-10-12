const about = `
 
Hello! I'm Ekah Francis, a passionate Frontend Developer with advanced knowledge in HTML, CSS, JavaScript, and Bootstrap. I specialize in creating dynamic, user-friendly websites and applications that provide seamless user experiences. With a keen eye for detail and a strong commitment to clean, efficient code, I strive to bring designs to life in the most captivating and functional ways possible.

Currently, I am expanding my skill set by diving into backend development. My goal is to become a Fullstack Web Developer, capable of handling both frontend and backend challenges to deliver comprehensive and robust web solutions.
    `;

const skills = [
  { name: "html & css", logo: "/images/html-css.webp" },
  { name: "sass", logo: "/images/Sass-logo.png" },
  { name: "Bootstrap", logo: "/images/Bot.png" },
  { name: "javascript", logo: "/images/JavaScript-logo.svg" },
  { name: "react", logo: "/images/react-logo.svg" },
  { name: "firebase", logo: "/images/firebase.svg" },
  { name: "Git", logo: "/images/git.svg" },
  { name: "Github", logo: "/images/github.svg" },
];
const projects = [
  {
    title: "E-commerce Template",
    image: "/images/ecome.png",
    desc: "This is an Ecommerce website Template made with HTML, CSS, and JavaScript.",
    codeLink: "https://github.com/Ekah-Francis/Ecommerce",
    liveLink: "https://ecommerce-umber-two-49.vercel.app/",
  },
  {
    title: "Image search app",
    image: "/images/image-search.png",
    desc: "Search and view beautiful images online with this website.",
    codeLink: "https://github.com/Ekah-Francis/image-search-app",
    liveLink: "https://image-search-app-henna.vercel.app/",
  },
  {
    title: "Countries List",
    image: "/images/countries-app.png",
    desc: "Pulls data from REST API stored in JSON and renders it with React + TailwindCSS. Dark Mode Feature also available.",
    // codeLink: "https://github.com/Ekah-Francis/countrylist",
    liveLink: "https://countrylist-fawn.vercel.app/",
  },
  {
    title: "Riket-Interior-Website",
    image: "/images/riket2.png",
    desc: "Interior decorator website created with React + Custom CSS5 and other CSS frameworks. API renders gallery images directly from Pixel.",
    // No codeLink for this project
    liveLink: "https://riket-interior.vercel.app/",
  },
];

export { about, skills, projects };
