import React from 'react';
import './CSS/Policy.css';

const About = () => {
    return (
        <div className="policy-page">
            <h1>About Us</h1>
            <div className="policy-content">
                <section>
                    <h2>Our Story</h2>
                    <p>Welcome to CricKart, your premier destination for high-quality cricket equipment and accessories.</p>
                </section>

                <section>
                    <h2>Our Mission</h2>
                    <p>To provide cricket enthusiasts with premium quality cricket equipment at competitive prices while delivering exceptional customer service.</p>
                </section>

                <section>
                    <h2>Why Choose Us</h2>
                    <ul>
                        <li>Premium Quality Products</li>
                        <li>Authentic Cricket Equipment</li>
                        <li>Competitive Prices</li>
                        <li>Expert Customer Support</li>
                        <li>Fast & Reliable Shipping</li>
                    </ul>
                </section>

                <section>
                    <h2>Contact Information</h2>
                    <p>For any queries or assistance, feel free to reach out to us:</p>
                    <p>Email: support@crickart.com</p>
                    <p>Phone: +91 XXXXX XXXXX</p>
                </section>
            </div>
        </div>
    );
};

export default About; 