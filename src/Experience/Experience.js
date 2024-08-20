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
        <tr>
          <th rowspan='2'></th>
          <td><h3 className="experience-company">{exp.companyName}</h3></td>
        </tr>
        <tr>
          <td><div className="experience-duration">{exp.duration}</div></td>
        </tr>
          {/* <h3 className="experience-company">{exp.companyName}</h3>
          <h5 className="experience-duration">{exp.duration}</h5> */}
          <img src={exp.logo} alt={`${exp.companyName} logo`} className="experience-logo" />
        </div>
        <div className="experience-details">
          <span className="experience-title">{exp.jobTitle}</span>
          <div className="experience-description1">{exp.description1}</div>
          <div className="experience-description2">{exp.description2}</div>
        </div>
      </div>
    ))}
  </div>
);

export default Experience;
