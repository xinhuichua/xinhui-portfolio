import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="eyebrow">Available from Jan 2026</p>
          <h1>Chua Xinhui</h1>
          <p className="sub">B.Sc. (Information Systems), SMU — Data & Analytics</p>
          <p className="blurb">
            I build data products and dashboards that turn complex datasets into clear, actionable insights.
            Previously at MAS, MOM, Reach Alliance, and Refinitiv (LSEG).
          </p>
          <div className="cta">
            <a href="#projects" className="btn">View Projects</a>
            <a href="#contact" className="btn secondary">Get in Touch</a>
          </div>
        </div>
        <div className="hero-avatar" aria-hidden="true">
          <div className="avatar-circle">CX</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
