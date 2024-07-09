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
      <p>
        xxxx
        <br />
        <br />
        xxx
        <br />
        <br />
        xxx
      </p>
    </div>
    <SkillChart title="Programming" skills={frontEndSkills} />
  </div>
);

export default FrontEndSkill;
