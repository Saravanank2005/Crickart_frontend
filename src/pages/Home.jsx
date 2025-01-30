import React from 'react';
import Slider from '../components/Slider/Slider';
import NewLaunches from '../components/Collections/NewLaunches';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import Categories from '../components/Categories/Categories';
import './CSS/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Slider />
      <Categories />
      <NewLaunches />
      <FeaturedProducts />
    </div>
  );
};

export default Home; 