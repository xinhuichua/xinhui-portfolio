import React from 'react';
import './About.css';

const About = () => (
  <section id="about" className="section">
    <div className="container">
      <h2>About</h2>
      <div className="cards">
        <div className="card">
          <h3>Education</h3>
          <ul className="tight">
            <li><strong>Singapore Management University</strong> — B.Sc. (Information Systems), Aug 2022 – Dec 2025</li>
            <li>Activities: SMU Inspirar; SMU BIA; Project MigrantPal; Ellipsis Tech Series Hackathon 2024 (Top 10); AGO Data Challenge 2023; Data Analytics in Asia (Bangkok) – HungryHub</li>
            <li>Award: John Lim Family Office Scholarship</li>
          </ul>
          <ul className="tight">
            <li><strong>Temasek Polytechnic</strong> — Diploma in Financial Business Informatics (Merit), Apr 2019 – May 2022</li>
            <li>Activities: FBI SIG; Industry Mentorship Network; Community Service Club; Temasek Leadership Programme; Singtel Global Delivery Hackathon; SP Polyfintech API Hackathon 2021</li>
            <li>Awards: Octava Foundation Scholarship; Director’s List AY2020/2021; Informatics & IT Youth Leader Award</li>
          </ul>
        </div>
        <div className="card">
          <h3>What I’m looking for</h3>
          <p>Data / Analytics roles where I can ship robust pipelines, clean visualizations, and measurable business impact.</p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
