// src/components/Profile.js
import React, { useState } from 'react';
import AboutMe from '../About/AboutMe';
import FrontEndSkill from '../Skill/FrontEndSkill';
import BackEndSkill from '../Skill/BackEndSkill';
import OtherSkill from '../Skill/OtherSkill';
import SkillSelect from '../Skill/SkillSelect';
import Experience from '../Experience/Experience';
// import './Profile.css';

const Profile = () => {
  const [selectedSkill, setSelectedSkill] = useState('Algorithm');

  const renderSkillComponent = () => {
    switch (selectedSkill) {
      case 'Programming':
        return <FrontEndSkill />;
      case 'Tools':
        return <BackEndSkill />;
      case 'System':
        return <OtherSkill />;
      default:
        return <FrontEndSkill />;
    }
  };

  return (
    <div className="profile">
      <section id="about" className="section">
        <AboutMe />
      </section>
      <section id="skill" className="section">
        <div className="front-end visibility">
          <div className="skill-section">
            <SkillSelect setSelectedSkill={setSelectedSkill} />
          </div>
          <div className="skill-introduce">
            {renderSkillComponent()}
          </div>
        </div>
      </section>
      <section id="experience" className="section">
        {/* <h2>Experience</h2>
        <p>Experience section content.</p> */}
        <Experience />
      </section>
    </div>
  );
};

export default Profile;
