import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container">
        <a href="#home" className="brand">Chua Xinhui</a>
        <nav>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact" className="btn">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
