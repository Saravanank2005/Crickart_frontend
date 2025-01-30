import React, { useState } from 'react';
import './CSS/Policy.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <div className="policy-page">
            <h1>Contact Us</h1>
            <div className="policy-content">
                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <p>We&apos;re here to help! Send us your query and we&apos;ll get back to you within 24 hours.</p>
                    
                    <div className="contact-details">
                        <div className="contact-item">
                            <h3>Customer Support</h3>
                            <p>Email: support@crickart.com</p>
                            <p>Phone: +91 98765 43210</p>
                            <p>Hours: Mon-Sat, 9:00 AM - 6:00 PM IST</p>
                        </div>
                        
                        <div className="contact-item">
                            <h3>Office Address</h3>
                            <p>CricKart Sports Pvt Ltd</p>
                            <p>123 Cricket Avenue</p>
                            <p>Chennai, Tamil Nadu 600001</p>
                        </div>
                    </div>
                </div>

                <div className="contact-form">
                    <h2>Send us a Message</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input 
                                type="text" 
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="email" 
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea 
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-button">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact; 