import React, { useState, useEffect } from 'react';
import './Slider.css';
import { Link } from 'react-router-dom';
import hero_image from '../assets/hero_image.png';
import exclusive_image from '../assets/exclusive_image.png';
import p1_img from '../assets/assets/players/sachin.png';
import p2_img from '../assets/assets/players/rohit.png';
import p3_img from '../assets/assets/players/bumrah.png';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: p1_img,
            title: "God's Favourite",
            subtitle: "Exclusive Edition",
            buttonText: "Shop Now",
            link: "/bats",
            position: "right",
            theme: "standard"
        },
        {
            image: hero_image,
            title: "King Of Cricket's",
            subtitle: "Signature Willow",
            buttonText: "Buy Now",
            link: "/bats",
            position: "right",
            theme: "standard"
        },
        {
            image: p2_img,
            title: "Legendary",
            subtitle: "Professional Bowler's Choice",
            buttonText: "View Collection",
            link: "/balls",
            position: "right",
            theme: "standard"
        },
        {
            image: exclusive_image,
            title: "Exclusive Offers",
            subtitle: "Up to 50% Off on Premium Gear",
            buttonText: "Check Now",
            link: "/kits",
            position: "right",
            theme: "standard"
        },
        {
            image: p3_img,
            title: "Hitman's Choice",
            subtitle: "Match Ready Equipment",
            buttonText: "Shop Now",
            link: "/kits",
            position: "right",
            theme: "standard"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => 
                prevSlide === slides.length - 1 ? 0 : prevSlide + 1
            );
        }, 5000);

        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };

    return (
        <div className="slider-container">
            <div className="slider">
                {slides.map((slide, index) => (
                    <div 
                        key={index} 
                        className={`slide ${index === currentSlide ? 'active' : ''} ${slide.position} ${slide.theme}`}
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        <div className="slide-content">
                            <h1>{slide.title}</h1>
                            <p>{slide.subtitle}</p>
                            <Link to={slide.link} className="slide-button">
                                {slide.buttonText}
                            </Link>
                        </div>
                        <img src={slide.image} alt={slide.title} />
                    </div>
                ))}
            </div>

            <button className="slider-button prev" onClick={prevSlide}>❮</button>
            <button className="slider-button next" onClick={nextSlide}>❯</button>

            <div className="slider-dots">
                {slides.map((_, index) => (
                    <span 
                        key={index} 
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Slider; 
