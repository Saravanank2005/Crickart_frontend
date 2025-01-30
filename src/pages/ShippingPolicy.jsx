import React from 'react';
import './CSS/Policy.css';

const ShippingPolicy = () => {
    return (
        <div className="policy-page">
            <h1>Shipping Information</h1>
            <div className="policy-content">
                <section>
                    <h2>Delivery Timeframes</h2>
                    <ul>
                        <li>Metro Cities: 2-3 business days</li>
                        <li>Other Cities: 3-5 business days</li>
                        <li>Remote Areas: 5-7 business days</li>
                    </ul>
                </section>

                <section>
                    <h2>Shipping Costs</h2>
                    <ul>
                        <li>Free shipping on orders above ₹500</li>
                        <li>Standard shipping: ₹49 for orders below ₹500</li>
                        <li>Express shipping: Additional ₹100 (1-2 business days)</li>
                    </ul>
                </section>

                <section>
                    <h2>Order Tracking</h2>
                    <p>Once your order is shipped, you will receive a tracking number via email and SMS. You can track your order status through our website or courier partner&apos;s platform.</p>
                </section>

                <section>
                    <h2>International Shipping</h2>
                    <p>Currently, we only ship within India. International shipping will be available soon.</p>
                </section>
            </div>
        </div>
    );
};

export default ShippingPolicy; 