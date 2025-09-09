import React from 'react';
import './Skills.css';
import {
  Code2,
  Database,
  Terminal,
  BarChart3,
  Cloud,
  GitMerge,
  FileSpreadsheet,
  LayoutTemplate
} from 'lucide-react';

// External SVGs for logos not in Lucide
const ICONS = {
  azure: 'https://cdn.simpleicons.org/microsoftazure/0078D4',
  azureDevOps: 'https://cdn.simpleicons.org/azuredevops/0078D7',
};

const IconImg = ({ src, alt }) => (
  <img src={src} alt={alt} className="skill-icon" loading="lazy" />
);

const Skills = () => (
  <section id="skills" className="section">
    <div className="container">
      <h2>Skills & Certifications</h2>

      <div className="skills-grid">
        <div className="card">
          <h3>Software & Tools</h3>
          <ul className="skills-list">
            <li><Code2 size={18} /> Python</li>
            <li><Terminal size={18} /> Flask</li>
            <li><LayoutTemplate size={18} /> React / Vue</li>
            <li><Code2 size={18} /> HTML / CSS / JS / TS</li>
            <li><Database size={18} /> SQL / MySQL / PHP</li>
            <li><BarChart3 size={18} /> Power BI</li>
            <li><FileSpreadsheet size={18} /> Tableau</li>
            <li><Cloud size={18} /> <IconImg src={ICONS.azure} alt="Microsoft Azure" /> Microsoft Azure</li>
            <li><GitMerge size={18} /> <IconImg src={ICONS.azureDevOps} alt="Azure DevOps" /> Azure DevOps</li>
          </ul>
        </div>

        <div className="card">
          <h3>Certifications</h3>
          <ul className="skills-list">
            <li>A100: Python Programming &amp; Data Visualisation</li>
            <li>Google Data Analytics</li>
            <li>Google AI Essentials</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
