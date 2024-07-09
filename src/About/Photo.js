import React from 'react'
import "./Photo.css"
import PhotoImg from '../images/about_photo.jpg';

const Photo = () => {
  return (
    <div className='Photo'>
        <img
            src={PhotoImg}
        >
        </img>
    </div>
  )
}

export default Photo