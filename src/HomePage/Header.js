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
            <h3>Hi I'm</h3>
            <h1>Lucy Chiu</h1>
            <h4>Software Engineer</h4>
            <h5>2.5 years Software application development</h5>
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
