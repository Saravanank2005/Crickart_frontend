import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Shop Section */}
                <div className="footer-section">
                    <h3>Shop</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/bats">Cricket Bats</Link></li>
                        <li><Link to="/balls">Cricket Balls</Link></li>
                        <li><Link to="/kits">Cricket Kits</Link></li>
                    </ul>
                </div>

                {/* Customer Service */}
                <div className="footer-section">
                    <h3>Customer Service</h3>
                    <ul>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/shipping-policy">Shipping Information</Link></li>
                        <li><Link to="/returns-policy">Returns & Exchanges</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                    </ul>
                </div>

                {/* Legal & Company */}
                <div className="footer-section">
                    <h3>Legal & Company</h3>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/terms">Terms & Conditions</Link></li>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                    
                    </ul>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="footer-bottom">
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaFacebook />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaInstagram />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaLinkedin />
                    </a>
                    <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaWhatsapp />
                    </a>
                </div>
                <div className="footer-copyright">
                    <p>Copyright © 2024 CricKart - All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
