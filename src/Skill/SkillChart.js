// src/components/SkillChart.js
import React from 'react';

const SkillChart = ({ skills }) => {
  return (
    <div className="skill-chart">
      {skills.map((skill, index) => (
        <div key={index}>
          <h5>{skill.name}</h5>
          <div className="bar">
            <div className={`bar-${skill.type}`} data-percent={skill.percent} style={{ width: skill.percent }}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillChart;
