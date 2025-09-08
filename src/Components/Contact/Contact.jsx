import React from 'react';
import './Contact.css';

const Contact = () => (
  <section id="contact" className="section">
    <div className="container">
      <h2>Contact</h2>
      <div className="contact-card">
        <p><strong>Phone:</strong> <a href="tel:+6593817800">(+65) 9381 7800</a></p>
        <p><strong>Email:</strong> <a href="mailto:xinhui.chua188@gmail.com">xinhui.chua188@gmail.com</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a></p>
        <p className="note">Open to opportunities starting <strong>January 2026</strong>.</p>
      </div>
    </div>
  </section>
);

export default Contact;
