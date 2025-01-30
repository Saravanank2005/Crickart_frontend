import React from 'react';
import './CSS/Policy.css';

const PrivacyPolicy = () => {
    return (
        <div className="policy-page">
            <h1>Privacy Policy</h1>
            <div className="policy-content">
                <section>
                    <h2>Information We Collect</h2>
                    <p>We collect information that you provide directly to us, including when you:</p>
                    <ul>
                        <li>Create an account</li>
                        <li>Make a purchase</li>
                        <li>Sign up for our newsletter</li>
                        <li>Contact us for support</li>
                    </ul>
                </section>

                <section>
                    <h2>How We Use Your Information</h2>
                    <p>We use the information we collect to:</p>
                    <ul>
                        <li>Process your orders and payments</li>
                        <li>Communicate with you about your orders</li>
                        <li>Send you marketing communications (with your consent)</li>
                        <li>Improve our services</li>
                    </ul>
                </section>
                {/* Add more sections as needed */}
            </div>
        </div>
    );
};

export default PrivacyPolicy; 