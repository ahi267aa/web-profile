// src/Experience/Experience.js
import React from 'react';
import experiences from './ExperienceData';
import './Experience.css';

const Experience = () => (
  <div className="experience">
    <h2>Experience</h2>
    {experiences.map((exp, index) => (
      <div key={index} className="experience-item">
        <div className="experience-logo-container">
          <h3 className="experience-company">{exp.companyName}</h3>
          <img src={exp.logo} alt={`${exp.companyName} logo`} className="experience-logo" />
        </div>
        <div className="experience-details">
          <span className="experience-duration">{exp.duration}</span>
          <p>{exp.description}</p>
        </div>
      </div>
    ))}
  </div>
);

export default Experience;
