// src/components/FrontEndSkill.js
import React from 'react';
import SkillChart from './SkillChart';
import './Skill.css';

const frontEndSkills = [
  { name: 'Python', percent: '95%', type: 'front' },
  { name: 'Javascript / NodeJs', percent: '90%', type: 'front' },
  { name: 'HTML / CSS / RWD', percent: '85%', type: 'front' },
  { name: 'React', percent: '75%', type: 'front' },
  { name: 'C++', percent: '65%', type: 'front' },
];

const FrontEndSkill = () => (
  <div className="skill-content">
    <div className="skill-text">
      <h2>Programming</h2>
      <div className='skill-description-box'>
        <p className='skill-description'>
          5 years of Python experience, predominantly utilizing at algorithm and application development with libraries and PyTorch.
        </p>
        <p className='skill-description'>
          Participated in web development during work, responsible for full-stack (Javascript / React) and database management.
        </p>
        <p className='skill-description'>
          During my college studies, primarily focused on IoT with C++, working on graduation topic and software development.
        </p>
      </div>
    </div>
    <SkillChart title="Programming" skills={frontEndSkills} />
  </div>
);

export default FrontEndSkill;
