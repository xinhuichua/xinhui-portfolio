import React from 'react';
import './About.css';

const education = [
  {
    years: '2022 – 2025',
    title: 'B.Sc. (Information Systems)',
    place: 'Singapore Management University',
    desc: 'Activities: Data Analytics in Asia (SMU-X), Reach Alliance Researcher'
  },
  {
    years: '2019 – 2022',
    title: 'Diploma in Financial Business Informatics (Merit)',
    place: 'Temasek Polytechnic',
    desc: 'Activities: Diploma Student Interest Group, TP LEADership Programme, Singtel GD Hackathon, Polyfintech100 Hackathon',
  },
];

const About = () => (
  <section id="about" className="section">
    <div className="container">
      <div className="intro-row">
        <h2>About</h2>
        <p className="intro">
          I am keen in <strong>Software Development</strong> and <strong>Data Analytics</strong>,
          and enjoy building solutions that combine technical skills with business impact.
        </p>
      </div>

      <div className="edu-exp">
        {/* Education column */}
        <div>
          <h3 className="col-title">Education</h3>
          <div className="timeline">
            {education.map((item, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-card">
                  <span className="years">{item.years}</span>
                  <h4 className="item-title">{item.title}</h4>
                  <div className="place">{item.place}</div>
                  <p className="desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leave right column for Experience section (separate component) */}
        <div className="placeholder-col">
          {/* This space intentionally left for Experience.jsx which renders the matching timeline */}
        </div>
      </div>
    </div>
  </section>
);

export default About;
