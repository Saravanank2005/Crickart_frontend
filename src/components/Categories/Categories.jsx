import React from 'react';
import './Categories.css';
import { Link } from 'react-router-dom';

const Categories = () => {
    const categories = [
        {
            id: 'bats',
            name: 'Cricket Bats',
            description: 'Professional Grade Bats',
            count: '50+ Products'
        },
        {
            id: 'balls',
            name: 'Cricket Balls',
            description: 'Match & Practice Balls',
            count: '30+ Products'
        },
        {
            id: 'kits',
            name: 'Protection',
            description: 'Safety Equipment',
            count: '40+ Products'
        },
       
    ];

    return (
        <div className="categories-section">
            <h2>Shop By Category</h2>
            <div className="categories-container">
                {categories.map((category) => (
                    <Link to={`/${category.id}`} key={category.id} className="category-item">
                        <div className="category-content">
                            <h3>{category.name}</h3>
                            <p>{category.description}</p>
                            <span className="product-count">{category.count}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Categories; 