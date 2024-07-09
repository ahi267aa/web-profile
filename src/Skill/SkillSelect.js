// src/Skill/SkillSelect.js
import React from 'react';

const SkillSelect = ({ setSelectedSkill }) => {
  return (
    <div className="skill-button-select">
      <div className="skill-box">
        <button
          className="button"
          onClick={() => setSelectedSkill('Programming')}
        >
          PROGRAMMING
          <span></span><span></span><span></span><span></span>
        </button>
        <button
          className="button"
          onClick={() => setSelectedSkill('Tools')}
        >
          TOOLS
          <span></span><span></span><span></span><span></span>
        </button>
        <button
          className="button"
          onClick={() => setSelectedSkill('System')}
        >
          SYSTEM
          <span></span><span></span><span></span><span></span>
        </button>
      </div>
    </div>
  );
};

export default SkillSelect;
