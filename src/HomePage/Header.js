// src/HomePage/Header.js
import React from 'react';
import './Header.css';
import Navbar from './Navbar';
import PersonalLink from './PersonalLink';

function Header() {
  return (
    <header className="header">
      <Navbar />
      <div class="header-container">
        <div class="header-container-left">
          <div class="header-myinfo">
            <h3>Hi, I'm Lucy Chiu</h3>
            <h2>Software Engineer</h2>
            <link rel="stylesheet" href="styles.css"></link>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet"></link>
            {/* <h5>2.5 years Software application development</h5> */}
            <h5>
              I love Programming and Architecture Design and have been persevering on my research since 2019.
            </h5>
            <h5>
              I can provide a effective assistance start right away!
            </h5>
            <PersonalLink />
          </div>
        </div>
        <div class="header-container-right">
          <h1></h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
