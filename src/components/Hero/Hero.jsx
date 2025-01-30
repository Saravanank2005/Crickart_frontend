import React from 'react'
import hand_icon from '../assets/hand_icon.png';
import { Link } from 'react-router-dom';
import './Hero.css'
import arrow from '../assets/arrow.png';
import hero_image from '../assets/hero_image.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
          <div>
              <div className="hero-hand-icon">
                  <p>New </p>
                  <img src={hand_icon} alt="" />
              </div>
              <p>launches Unleashed</p>
          </div>
          <div className="hero-latest-btn">
            <Link to="new-collections" className="hero-latest-btn" >
                <div style={{ textDecoration: 'none' }}>Check Out</div>
                <img src={arrow} alt="arrow"/>
            </Link>
          </div>
      </div>

      <div className="hero-right">
          <img src={hero_image} alt="hero" />
      </div>
    </div>
  )
}

export default Hero