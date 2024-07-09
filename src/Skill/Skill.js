// src/components/Skill.js
import React from 'react';
import './Skill.css';

function Skill() {
  return (
    <header className="skill">
      <div class="skill" id="myskill">
          <div class="front-end visibility">
            <div class="skill-text">
              <h2>FRONT-END</h2>
              <p>
                第一次接觸網頁前端是大學二年級在課程當中學到
                並且最後有製作出一個簡單小成品。
                
                因為大三的專題開始接觸大量的Java(AndroidStudio)以及JavaScript/Juery/PHP。
                
                目前因為參與其他專案開發，當中自學到很多新知識
                例如Webpack/RWD/Vue.js框架等等。
              </p>
            </div>
            <div class="skill-chart">
              <h5>HTML / CSS / RWD</h5>
              <div class="bar">
                <div class="bar-front" data-percent="83%"></div>
              </div>
              <h5>JAVASCRIPT / JQUERY</h5>
              <div class="bar">
                <div class="bar-front" data-percent="70%"></div>
              </div>
              <h5>BOOTSTRAP</h5>
              <div class="bar">
                <div class="bar-front" data-percent="55%"></div>
              </div>
              <h5>VUE.JS(Learning...)</h5>
              <div class="bar">
                <div class="bar-front" data-percent="30%"></div>
              </div>
              <h5>ANDROID STUDIO(Java)</h5>
              <div class="bar">
                <div class="bar-front" data-percent="70%"></div>
              </div>
            </div>
          </div>
          <div class="back-end visibility">
            <div class="skill-text">
              <h2>BACK-END</h2>
              <p>
                Javascript/Firebase的Authentication、Database、Storge及架設Hosting等都相當熟悉。
                PHP/Mysql的新增/刪除/修改/查詢及資料表關聯都有撰寫過。
                Python則是在課程中學習到並且透過比賽更加深入了解。

              </p>
            </div>
            <div class="skill-chart">
              <h5>Javascript/ FIREBASE</h5>
              <div class="bar">
                <div class="bar-back" data-percent="70%"></div>
              </div>
              <h5>PHP/ MYSQL</h5>
              <div class="bar">
                <div class="bar-back" data-percent="45%"></div>
              </div>
              <h5>PYTHON</h5>
              <div class="bar">
                <div class="bar-back" data-percent="60%"></div>
              </div>
            </div>
          </div>
          <div class="Other">
            <div class="skill-text">
              <h2>OTHER</h2>
              <p>
                熟悉Github/Gitlab基本的指令操作
                ex.git branch/checkout/status/commit/push等等。
                
                API處於自學中，嘗試利用open data做基本的測試。
                Selenium自動化測試，曾使用Katalon寫過類似自動打卡的小成品，除了WebUI.click、waitForElementVisible、setText等特定函式外，也使用的迴圈陣列等等去執行程式。
              </p>
            </div>
            <div class="skill-chart">
              <h5>GITHUB / GITLAB</h5>
              <div class="bar">
                <div class="bar-other" data-percent="60%"></div>
              </div>
              <h5>Restful API串接 (Learning...)</h5>
              <div class="bar">
                <div class="bar-other" data-percent="30%"></div>
              </div>
              <h5>SELENIUM</h5>
              <div class="bar">
                <div class="bar-other" data-percent="60%"></div>
              </div>
            </div>
          </div>
          <div class="skill-btn">
            <div class="box bg-1">
              <button class="button button--ujarak button--border-thin button--text-thick" onclick="FrontClick();">Front-End</button>
              <button class="button button--ujarak button--border-thin button--text-thick" onclick="BackClick()">Back-End</button>
              <button class="button button--ujarak button--border-thin button--text-thick" onclick="OtherClick();">Other</button>
            </div>
          </div>
      </div>
    </header>
    );
}

export default Skill;
