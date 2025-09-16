import React from 'react';
import './Projects.css';

const projects = [
  {
    name: 'Enhancing Restaurant Performance & Conversion',
    date: 'May 2025',
    bullets: [
      'Customer tier‑upgrade prediction with Python (pandas, scikit‑learn).',
      'NLP sentiment analysis on reviews to uncover satisfaction drivers.',
      'Apache Superset dashboards tracking conversion and sentiment trends for execs.'
    ]
  },
  {
    name: 'IS212 Work from Home Website',
    date: 'Nov 2024',
    bullets: [
      'Backend in Python Flask; frontend in Vue + TS/JS; deployed on Render/Netlify.',
      'Unit & integration tests via CI; team coordination with Slack/JIRA; Scrum sprints.'
    ]
  },
  {
    name: 'Wingstop Social Analytics',
    date: 'Nov 2024',
    bullets: [
      'Collected Reddit/TikTok/Google data via Python + Selenium; EDA + preprocessing.',
      'Sentiment, topic modeling, and network analysis to identify ops gaps & pain points.'
    ]
  },
  {
    name: 'Study With Me Website',
    date: 'Nov 2023',
    bullets: [
      'All‑in‑one study app (Pomodoro, tasks, tracking) using HTML/CSS/JS + Bootstrap.',
      'Interactive D3.js charts to allow users to view their productivity; responsive layout.'
    ]
  }
];

const Projects = () => (
  <section id="projects" className="section">
    <div className="container">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map((p, i) => (
          <article className="project" key={i}>
            <div className="project-head">
              <h3>{p.name}</h3>
              <span className="date">{p.date}</span>
            </div>
            <ul>
              {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
