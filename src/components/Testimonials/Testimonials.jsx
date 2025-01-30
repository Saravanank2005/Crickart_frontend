import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Rahul Kumar",
            role: "Professional Cricketer",
            comment: "The quality of cricket equipment from CricKart is exceptional. I've been using their bats for years and they never disappoint.",
            rating: 5
        },
        {
            id: 2,
            name: "Priya Singh",
            role: "Cricket Academy Coach",
            comment: "Best place to get cricket gear for my students. The variety and quality of products is outstanding.",
            rating: 5
        },
        {
            id: 3,
            name: "Arun Patel",
            role: "Club Cricketer",
            comment: "Great prices and amazing customer service. The delivery was quick and the products are authentic.",
            rating: 4
        }
    ];

    return (
        <div className="testimonials-section">
            <h2>What Our Customers Say</h2>
            <div className="testimonials-container">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="testimonial-card">
                        <div className="rating">
                            {[...Array(testimonial.rating)].map((_, index) => (
                                <span key={index} className="star">★</span>
                            ))}
                        </div>
                        <p className="comment">{testimonial.comment}</p>
                        <div className="user-info">
                            <div className="avatar">
                                {testimonial.name.charAt(0)}
                            </div>
                            <div className="user-details">
                                <h4>{testimonial.name}</h4>
                                <p>{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials; 