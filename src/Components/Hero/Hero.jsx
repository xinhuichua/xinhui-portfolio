import React from 'react';
import './Hero.css';
import profile from '../../assets/xinhui.jpg';
const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="eyebrow">Looking for full time roles from 2026</p>
          <h1>Chua Xinhui</h1>
          <p className="sub">A final year student at SMU - B.Sc. (Information Systems), Business Analytics & Digital Cloud Solutions</p>
        
        
        </div>
        <div className="hero-avatar" aria-hidden="true">
          <img src={profile} alt="Chua Xinhui" className="avatar-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
