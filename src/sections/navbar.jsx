import { Link as ScrollLink } from "react-scroll";
import {
  FaHome,
  FaInfoCircle,
  FaProjectDiagram,
  FaEnvelope,
  FaAlignLeft,
  FaTimes,
} from "react-icons/fa"; // Import the desired icons
import "../CSS/Navbar.css";

const Navbar = () => {
  const handleSidebarClose = () => {
    document.getElementById("sidebar-active").checked = false;
  };

  return (
    <nav>
      <ScrollLink
        className="home-link"
        to="home"
        smooth={true}
        duration={500}
        onClick={handleSidebarClose}
        style={{ background: "transparent" }}
      >
        <h3 style={{ color: "#6f2dbd" }}>
          Ekah <span style={{ color: "#000" }}>Francis</span>
        </h3>
      </ScrollLink>
      <input type="checkbox" id="sidebar-active" />
      <label htmlFor="sidebar-active" className="open-sidebar-button">
        <FaAlignLeft style={{ height: "32px", width: "25px" }} />
      </label>
      <label id="overlay" htmlFor="sidebar-active"></label>
      <div className="links-container">
        <label htmlFor="sidebar-active" className="close-sidebar-button">
          <FaTimes style={{ height: "32px", width: "25px" }} />
        </label>

        <ScrollLink
          className="home-link"
          to="home"
          smooth={true}
          duration={500}
          onClick={handleSidebarClose}
        >
          <FaHome style={{ marginRight: "8px" }} />
          Home
        </ScrollLink>
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          onClick={handleSidebarClose}
        >
          <FaInfoCircle style={{ marginRight: "8px" }} />
          About
        </ScrollLink>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          onClick={handleSidebarClose}
        >
          <FaProjectDiagram style={{ marginRight: "8px" }} />
          Projects
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          onClick={handleSidebarClose}
        >
          <FaEnvelope style={{ marginRight: "8px" }} />
          Contact
        </ScrollLink>
      </div>
    </nav>
  );
};

export default Navbar;
