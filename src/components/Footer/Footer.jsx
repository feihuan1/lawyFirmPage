import React from 'react'
import './Footer.css'
import { images } from "../../constants";

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='logo-container'>
        <img src={images.logo} alt="logo" />
        <div className='middle-line'/>
        <p>Alodie & Associates</p>
      </div>
      
      <div className='footer-links'>
        <a href="">Link</a>
      </div>
    </div>
  )
}

export default Footer
