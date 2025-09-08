import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-64}   // adjust if your navbar is sticky
          duration={500}
          className="brand"
        >
          Chua Xinhui
        </Link>
        <nav>
          <Link to="about" spy={true} smooth={true} offset={-64} duration={500}>
            About
          </Link>
          <Link to="experience" spy={true} smooth={true} offset={-64} duration={500}>
            Experience
          </Link>
          <Link to="projects" spy={true} smooth={true} offset={-64} duration={500}>
            Projects
          </Link>
          <Link to="skills" spy={true} smooth={true} offset={-64} duration={500}>
            Skills
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-64}
            duration={500}
            className="btn"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
