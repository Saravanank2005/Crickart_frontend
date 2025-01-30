import React from 'react';
import './CSS/Policy.css';

const FAQ = () => {
    return (
        <div className="policy-page">
            <h1>Frequently Asked Questions</h1>
            <div className="policy-content">
                <section>
                    <h2>Ordering</h2>
                    <div className="faq-item">
                        <h3>How do I place an order?</h3>
                        <p>Browse our products, add items to cart, and proceed to checkout. You can pay using various payment methods including UPI, cards, and net banking.</p>
                    </div>
                    <div className="faq-item">
                        <h3>Can I modify my order?</h3>
                        <p>Orders can be modified within 1 hour of placing them. Contact customer support for assistance.</p>
                    </div>
                </section>

                <section>
                    <h2>Shipping & Delivery</h2>
                    <div className="faq-item">
                        <h3>How long will delivery take?</h3>
                        <p>Standard delivery takes 2-5 business days depending on your location.</p>
                    </div>
                    <div className="faq-item">
                        <h3>Do you offer free shipping?</h3>
                        <p>Yes, we offer free shipping on orders above ₹500.</p>
                    </div>
                </section>

                <section>
                    <h2>Returns & Refunds</h2>
                    <div className="faq-item">
                        <h3>What is your return policy?</h3>
                        <p>We accept returns within 7 days of delivery for unused items in original packaging.</p>
                    </div>
                    <div className="faq-item">
                        <h3>How long do refunds take?</h3>
                        <p>Refunds are processed within 5-7 business days after receiving the returned item.</p>
                    </div>
                </section>

                <section>
                    <h2>Product Information</h2>
                    <div className="faq-item">
                        <h3>Are your products authentic?</h3>
                        <p>Yes, all our products are 100% authentic and sourced directly from authorized manufacturers.</p>
                    </div>
                    <div className="faq-item">
                        <h3>Do you offer warranty?</h3>
                        <p>Yes, we offer manufacturer warranty on all applicable products.</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default FAQ; 