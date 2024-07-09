// src/components/OtherSkill.js
import React from 'react';
import SkillChart from './SkillChart';
import './Skill.css';

const otherSkills = [
  { name: 'Windows', percent: '95%', type: 'other' },
  { name: 'Linux / Ubuntu', percent: '80%', type: 'other' },
  { name: 'Jetson Nano', percent: '75%', type: 'other' },
  { name: 'Raspberry Pi3', percent: '55%', type: 'other' },
  { name: 'Arduino', percent: '65%', type: 'other' },
];

const OtherSkill = () => (
  <div className="skill-content">
    <div className="skill-text">
      <h2>System</h2>
      <br />
      <div className='skill-description-box'>
        <p className='skill-description'>
          Mainly using Windows operating system, including software, applications and web pages, etc.
        </p>
        <p className='skill-description'>
          exposed to Linux systems at work and university to achieve edge system development, such as Jetson Nano. Also used the combination of Raspberry Pi3 and Arduino to create IoT system.
        </p>
      </div>
    </div>
    <SkillChart title="System" skills={otherSkills} />
  </div>
);

export default OtherSkill;
