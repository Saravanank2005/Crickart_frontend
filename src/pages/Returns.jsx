import React from 'react';
import './CSS/Policy.css';

const Returns = () => {
    return (
        <div className="policy-page">
            <h1>Returns & Exchanges</h1>
            <div className="policy-content">
                <section>
                    <h2>Return Policy</h2>
                    <p>We accept returns within 7 days of delivery for unused items in original packaging.</p>
                    <ul>
                        <li>Items must be unused and in original condition</li>
                        <li>Original packaging must be intact</li>
                        <li>Tags and labels must be attached</li>
                        <li>Proof of purchase is required</li>
                    </ul>
                </section>

                <section>
                    <h2>Exchange Process</h2>
                    <p>To initiate an exchange:</p>
                    <ol>
                        <li>Login to your account</li>
                        <li>Go to Order History</li>
                        <li>Select the item to exchange</li>
                        <li>Choose exchange reason</li>
                        <li>Select replacement item</li>
                        <li>Generate return shipping label</li>
                    </ol>
                </section>

                <section>
                    <h2>Refund Information</h2>
                    <p>Refunds will be processed within 5-7 business days after receiving the returned item.</p>
                    <ul>
                        <li>Original payment method will be refunded</li>
                        <li>Shipping charges are non-refundable</li>
                        <li>Store credit option available</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default Returns; 