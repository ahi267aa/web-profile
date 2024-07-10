// src/components/Profile.js
import React from 'react';
import './AboutMe.css';
import Photo from './Photo';
import HighLightText from './HighLightText'
import MyInfo from './MyInfo'

function AboutMe() {
  return (
    <header className="about">
      <div class="about-container">
        <div class="about-container-left">
          <Photo />
        </div>
        <div class="about-container-right">
          {/* <div class="about-container-right-introduce">
            <h3>MY BIOGRAPHY</h3>
            <h2>Software & Web Developer</h2>
            <h3>I love Programming and Architecture Design and have been persevering on my portfolio since 2019. Good at programming languages such as Python, Javascript, C++.</h3>
            <h3>Over the past 2.6 years, I've been dedicated to developing the company's "Automated Production Line Integration System". Primarily responsible for edge and web application developments. Currently, it's running smoothly in factories located in Suzhou, Chongqing and Vietnam.</h3>
          </div> */}
          
          <div class="about-container-right-introduce">
            <h3>MY BIOGRAPHY</h3>
            <h2>Algorithm & Web Developer</h2>
            <p class='about-content'>
              I love <HighLightText t="Programming" /> and <HighLightText t="Architecture Design" />,  
              and have been persevering on my research since <HighLightText t="2019" />,
              exterpise in algorithm and full-stack web development.
              Good at programming languages such as 
              <HighLightText t =" Python"/>, 
              <HighLightText t =" Javascript"/> and 
              <HighLightText t =" C++"/>.
            </p>
            <p class='about-content'>
                Over the past 2.6 years, 
                I've been dedicated to developing the company's 
                <HighLightText t='"Automated Production Line Integration System"'/>,
                responsible for edge and web applications.
                Currently, it's subordinating in factories located in Suzhou, Chongqing and Vietnam.
            </p>
          </div>
          
          <hr class="divider"></hr>
          <MyInfo/>
        </div>
      </div>
    </header>
  );
}

export default AboutMe;
