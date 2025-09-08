import React from 'react';
import './Experience.css';

const roles = [
  {
    org: 'Monetary Authority of Singapore',
    dates: 'May 2025 – Aug 2025',
    title: 'Data Analytics Intern',
    bullets: [
      'Led usability testing for an internal AI tool to assess adoption feasibility; analyzed interaction patterns and produced decision-ready reports.',
      'Conducted user research and synthesized data to drive enhancements to MAS website usability.'
    ]
  },
  {
    org: 'Ministry of Manpower',
    dates: 'Jun 2024 – Apr 2025',
    title: 'Dashboard Intern',
    bullets: [
      'Built interactive Power BI dashboards to visualize complex datasets and support ops efficiency.',
      'Partnered with Work Pass Division directors to define KPIs and refine data models that informed workforce planning.'
    ]
  },
  {
    org: 'Reach Alliance',
    dates: 'May 2023 – Sep 2024',
    title: 'Researcher',
    bullets: [
      'Planned and executed 10 field trips with a 5‑member cross‑functional team; collected primary data from migrant workers.',
      'Analyzed 30+ interactions via Telegram chatbot; published recommendations on onboarding, human‑AI hybrid design, and cultural tailoring.'
    ]
  },
  {
    org: 'Refinitiv (an LSEG business)',
    dates: 'Jul 2021 – Feb 2022',
    title: 'Student Intern',
    bullets: [
      'Shipped real‑time Power BI dashboards using Python + Eikon API for global oil market tracking.',
      'Automated report generation to cut publishing time by ~20%; coordinated with 10 industry participants to analyze daily bids for palm oil pricing insights.'
    ]
  }
];

const Experience = () => (
  <section id="experience" className="section">
    <div className="container">
      <h2>Experience</h2>
      <div className="timeline">
        {roles.map((r, i) => (
          <div className="role" key={i}>
            <div className="role-head">
              <h3>{r.title} · <span className="org">{r.org}</span></h3>
              <span className="dates">{r.dates}</span>
            </div>
            <ul>
              {r.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
