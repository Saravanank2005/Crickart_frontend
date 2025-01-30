import React from 'react'
import './Offers.css'
import exclusive_image from '../assets/exclusive_image.png'
import { Link } from 'react-router-dom'

const Offers = () => {
  return (
    <div className='offers-container'>
      <div className='offers'>
        <div className="offers-left">
          <div className="offer-content">
            <span className="special-tag">Special Offer</span>
            <h1>Exclusive</h1>
            <h1>Deals For You</h1>
            <p>SAVE UP TO 50% ON PREMIUM CRICKET GEAR</p>
            <ul className="offer-features">
              <li>✓ Free Shipping</li>
              <li>✓ Premium Quality</li>
              <li>✓ Best Prices</li>
            </ul>
            <Link to="/products" className="button">
              Shop Now
              <span className="arrow">→</span>
            </Link>
          </div>
        </div>
        <div className="offers-right">
          <div className="image-container">
            <img src={exclusive_image} alt="Exclusive Offer" />
            <div className="discount-badge">
              <span className="discount">50%</span>
              <span className="off">OFF</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offers