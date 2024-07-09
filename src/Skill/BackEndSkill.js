// src/components/BackEndSkill.js
import React from 'react';
import SkillChart from './SkillChart';
import './Skill.css';

const backEndSkills = [
  { name: 'Git', percent: '85%', type: 'back' },
  { name: 'MongoDB', percent: '70%', type: 'back' },
  { name: 'MySQL', percent: '75%', type: 'back' },
  { name: 'Docker', percent: '60%', type: 'back' },
  { name: 'FastAPI', percent: '83%', type: 'back' },
];

const BackEndSkill = () => (
  <div className="skill-content">
    <div className="skill-text">
      <h2>Tools</h2>
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
    <SkillChart title="Tools" skills={backEndSkills} />
  </div>
);

export default BackEndSkill;
