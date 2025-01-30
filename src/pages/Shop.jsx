import React from 'react';
import Slider from '../components/Slider/Slider';
import NewLaunches from '../components/Collections/NewLaunches';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import Categories from '../components/Categories/Categories';
import Testimonials from '../components/Testimonials/Testimonials';
import Brands from '../components/Brands/Brands';
import './CSS/Shop.css';

const Shop = () => {
    return (
        <div className="home-page">
            <Slider />
            <Categories />
            <NewLaunches />
            <FeaturedProducts />
            <Brands />
            <Testimonials />
        </div>
    );
};

export default Shop;