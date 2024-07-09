import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="sidebar">
        <div className="profile-pic">
          <img src="your-profile-pic-url.jpg" alt="Profile" />
        </div>
        <div className="profile-name">
          <h1>你的名字</h1>
          <p>Software Engineer</p>
        </div>
        <nav className="nav-links">
          <a href="#about">自我介紹</a>
          <a href="#portfolio">作品集</a>
          <a href="#contact">聯繫我</a>
        </nav>
      </div>
      <div className="main-content">
        <section id="about">
          <h2>自我介紹</h2>
          <p>這裡是一些自我介紹的內容...</p>
        </section>
        <section id="portfolio">
          <h2>作品集</h2>
          <p>這裡是一些作品集的內容...</p>
        </section>
        <section id="contact">
          <h2>聯繫我</h2>
          <p>這裡是一些聯繫方式...</p>
        </section>
      </div>
    </div>
  );
}

export default Home;
