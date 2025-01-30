import React from 'react';
import './CSS/Policy.css';

const TermsConditions = () => {
    return (
        <div className="policy-page">
            <h1>Terms & Conditions</h1>
            <div className="policy-content">
                <section>
                    <h2>1. Acceptance of Terms</h2>
                    <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
                </section>

                <section>
                    <h2>2. Use License</h2>
                    <p>Permission is granted to temporarily download one copy of the materials (information or software) on CricKart&apos;s website for personal, non-commercial transitory viewing only.</p>
                </section>
                {/* Add more sections as needed */}
            </div>
        </div>
    );
};

export default TermsConditions; 