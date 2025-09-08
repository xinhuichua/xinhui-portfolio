import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p>© {new Date().getFullYear()} Chua Xinhui · Built with React</p>
      <a href="#home" className="back">Back to top ↑</a>
    </div>
  </footer>
);

export default Footer;
