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
      <div className='skill-description-box'>
        <br />
        <p className='skill-description'>
          Use Git for version control, include publish of Github / Gitlab.
        </p>
        <p className='skill-description'>
          Database using relational(MySQL) and non-relational (MongoDB), FastAPI for front-end / back-end communication.
        </p>
        <p className='skill-description'>
          Docker for web container deployment and version control.
        </p>
      </div>
    </div>
    <SkillChart title="Tools" skills={backEndSkills} />
  </div>
);

export default BackEndSkill;
