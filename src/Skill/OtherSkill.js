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
      <p>
        xxx
        <br />
        <br />
        xxx
        <br />
        <br />
        xxx
      </p>
    </div>
    <SkillChart title="System" skills={otherSkills} />
  </div>
);

export default OtherSkill;
