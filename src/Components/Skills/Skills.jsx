import React from 'react';
import './Skills.css';

const Skills = () => (
  <section id="skills" className="section">
    <div className="container">
      <h2>Skills & Certifications</h2>
      <div className="skills-grid">
        <div className="card">
          <h3>Software & Tools</h3>
          <p>Python, Flask, Vue, HTML, CSS, JavaScript, MySQL, PHP, Excel, KNIME, Power BI, Tableau, SAS Enterprise Miner, Dialogflow, Figma, Azure, GitHub, JIRA, Apache Superset, CI/CD</p>
        </div>
        <div className="card">
          <h3>Certifications</h3>
          <p>A100: Python Programming & Data Visualisation; Google Data Analytics; Google AI Essentials</p>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
