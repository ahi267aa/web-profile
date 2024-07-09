// src/components/MyInfo.js
import React from 'react';
import './MyInfo.css';

function MyInfo() {
  return (
    <div className="my-info">
      <table className="info-table">
        <tbody>
          <tr>
            <td>Name：</td>
            <td>邱宇清（Lucy）</td>
            <td>Location：</td>
            <td>Taoyuan, Taiwan</td>
          </tr>
          <tr>
            <td>Gmail：</td>
            <td>ahi267aa@gmail.com</td>
            <td>Phone：</td>
            <td>0905-031-172</td>
          </tr>
          <tr>
            <td>Master's：</td>
            <td colspan="3">Electronic Enigeering, National United University</td>
          </tr>
          <tr>
            <td>Bachelor's：</td>
            <td colspan="3">Electronic Enigeering, National United University</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MyInfo;
