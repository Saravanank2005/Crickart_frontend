import React from 'react';
import './FeaturedCategories.css';
import { Link } from 'react-router-dom';

const FeaturedCategories = () => {
    const categories = [
        {
            id: 1,
            name: 'Cricket Bats',
            image: '../assets/bats-category.jpg',
            path: '/bats'
        },
        {
            id: 2,
            name: 'Cricket Balls',
            image: '../assets/balls-category.jpg',
            path: '/balls'
        },
        {
            id: 3,
            name: 'Cricket Kits',
            image: '../assets/kits-category.jpg',
            path: '/kits'
        }
    ];

    return (
        <section className="featured-categories">
            <h2>Shop By Category</h2>
            <div className="categories-grid">
                {categories.map(category => (
                    <Link to={category.path} key={category.id} className="category-card">
                        <div className="category-image">
                            <img src={category.image} alt={category.name} />
                        </div>
                        <h3>{category.name}</h3>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default FeaturedCategories; 