// src/HomePage/PersonalLink.js
import React from 'react';
import './PersonalLink.css';

function PersonalLink() {
  return (
    <div className="personal-links">
      <a class="personal-links gmail" href="mailto:ahi267aa@gmail.com" aria-label="Gmail" title="Gmail">
        <i class="fa-solid fa-envelope"></i>
      </a>
      <a class="personal-links bank" href="https://pda.104.com.tw/profile/share/bGymBoB95xZDYGr8LIHOa1IwgswXfGCl" aria-label="104 Bank" title="104人力銀行">
        <i class="fa-solid fa-building-columns"></i>
      </a>
      <a class="personal-links github" href="https://github.com/ahi267aa" aria-label="Github" title="Github">
        <i class="fa-brands fa-github"></i>
      </a>
      <a class="personal-links linkedIn" href="https://www.linkedin.com/in/lucy-chiu-a90886303/" aria-label="LinkedIn" title="LinkedIn">
        <i className="fa-brands fa-linkedin"></i>
      </a>
    </div>
  );
}

export default PersonalLink;
