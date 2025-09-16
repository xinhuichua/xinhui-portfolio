import React from 'react';
import './Experience.css';

const roles = [
  {
    years: 'May 2025 – Aug 2025',
    title: 'Data Analytics Intern',
    place: 'Monetary Authority of Singapore',
    desc: 'Assisted Usability testing for SmartAnswer (an AI Tool); conducted user research to improve MAS website usability.',
  },
  {
    years: 'Jun 2024 – Apr 2025',
    title: 'Dashboard Intern',
    place: 'Ministry of Manpower',
    desc: 'Developed Power BI dashboards for Work Pass Division Team Data and automated reporting processes.',
  },
  {
    years: 'May 2023 – Sep 2024',
    title: 'Researcher',
    place: 'Reach Alliance',
    desc: 'Field studies & chatbot analysis; published design recommendations.',
  },
  {
    years: 'Jul 2021 – Feb 2022',
    title: 'Student Intern',
    place: 'Refinitiv (LSEG)',
    desc: 'Real-time Power BI using Python + Eikon API; improved data retrieval time by 20%.',
  },
];

const Experience = () => (
  <section id="experience" className="section">
    <div className="container">
      <div className="edu-exp">
       
        <div className="placeholder-col" />
        <div>
          <h3 className="col-title">Experience</h3>
          <div className="timeline">
            {roles.map((r, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-card">
                  <span className="years">{r.years}</span>
                  <h4 className="item-title">{r.title}</h4>
                  <div className="place">{r.place}</div>
                  <p className="desc">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
