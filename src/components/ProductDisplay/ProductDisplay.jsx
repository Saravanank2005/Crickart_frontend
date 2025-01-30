import React, { useState, useEffect } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar, FaShoppingCart, FaTruck, FaShieldAlt, FaExchangeAlt, FaUser, FaHeart, FaRegHeart } from 'react-icons/fa';
import './ProductDisplay.css';
import all_product from '../assets/all_product';
import { useUserAuth } from '../../context/UserAuthContext';
import { Link } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';
import { useCart } from '../../context/CartContext';
import { toast } from 'react-toastify';
import { getImageUrl } from '../../utils/imageUtils';
import ReviewSection from '../ReviewSection/ReviewSection';

const ProductDisplay = ({ 
    product, 
    onToggleFavorite = () => console.warn('onToggleFavorite not implemented'), 
    isFavorite = false 
}) => {
    const { user } = useUserAuth();
    const { addToCart } = useCart();
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');
    const [imageError, setImageError] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isAddingToCart, setIsAddingToCart] = useState(false);

    // Get the correct product data
    const localProduct = all_product.find(p => p.id === parseInt(product.id));
    const displayProduct = { ...product, ...localProduct };

    const fetchReviews = async () => {
        const productId = product?._id || product?.id;
        
        if (!productId) {
            console.warn('Product ID is undefined, cannot fetch reviews');
            return;
        }

        // For static products, return empty reviews
        if (!isNaN(productId)) {
            setReviews([]);
            return;
        }

        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`http://localhost:4000/api/products/${productId}/reviews`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            if (data.success) {
                setReviews(data.reviews);
            } else {
                throw new Error(data.message || 'Failed to fetch reviews');
            }
        } catch (error) {
            console.error('Error fetching reviews:', error);
            setError('Unable to load reviews');
            setReviews([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Use either _id or id based on what's available
        const productId = product?._id || product?.id;
        if (productId) {
            fetchReviews();
        }
    }, [product?._id, product?.id]);

    const handleImageError = (e) => {
        // Try to fallback to a default image if available
        e.target.src = '/images/default-product.png';
        console.log('Using fallback image');
    };

    // Function to format the image URL
    const formatImageUrl = (imgPath) => {
        if (!imgPath) return '/images/default-product.png';
        
        // If it's already a full URL or starts with /static, return as is
        if (imgPath.startsWith('http') || imgPath.startsWith('/static')) {
            return imgPath;
        }
        
        // If it's an API-sourced image with /upload path
        if (imgPath.startsWith('/upload')) {
            return `http://localhost:4000${imgPath}`;
        }
        
        // Default case
        return imgPath;
    };

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating || 0);
        const hasHalfStar = (rating || 0) % 1 !== 0;

        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars.push(<FaStar key={i} className="star-filled" />);
            } else if (i === fullStars + 1 && hasHalfStar) {
                stars.push(<FaStarHalfAlt key={i} className="star-half" />);
            } else {
                stars.push(<FaRegStar key={i} className="star-empty" />);
            }
        }
        return stars;
    };

    const calculateDiscount = () => {
        if (!displayProduct.old_price || !displayProduct.new_price) return 0;
        return Math.round(((displayProduct.old_price - displayProduct.new_price) / displayProduct.old_price) * 100);
    };

    const handleFavoriteClick = () => {
        if (typeof onToggleFavorite === 'function') {
            onToggleFavorite(product.id);
        } else {
            console.warn('onToggleFavorite function not provided');
        }
    };

    const handleAddToCart = () => {
        setIsAddingToCart(true);
        
        try {
            addToCart({
                ...displayProduct,
                quantity: selectedQuantity
            });
            toast.success('Added to cart successfully!');
        } catch (error) {
            console.error('Error adding to cart:', error);
            toast.error('Failed to add to cart');
        } finally {
            setIsAddingToCart(false);
        }
    };

    console.log('Product data:', product);
    console.log('Product ID:', product._id || product.id);

    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-main-img">
                    <img 
                        src={formatImageUrl(product.image)}
                        alt={displayProduct.name}
                        className="main-image"
                        onError={handleImageError}
                    />
                    {user && (
                        <button 
                            className={`favorite-button ${isFavorite ? 'active' : ''}`}
                            onClick={handleFavoriteClick}
                        >
                            {isFavorite ? <FaHeart /> : <FaRegHeart />}
                        </button>
                    )}
                    {displayProduct.category === 'bats' && (
                        <div className="premium-badge">
                            Premium
                        </div>
                    )}
                </div>
            </div>
            
            <div className="productdisplay-right">
                <h1>{displayProduct.name}</h1>
                
                <div className="productdisplay-right-stars">
                    <div className="stars">
                        {renderStars(displayProduct.averageRating)}
                    </div>
                    <span className="review-count">
                        ({displayProduct.numReviews || 0} reviews)
                    </span>
                </div>
                
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">₹{displayProduct.old_price?.toLocaleString()}</div>
                    <div className="productdisplay-right-price-new">₹{displayProduct.new_price?.toLocaleString()}</div>
                    {displayProduct.old_price && (
                        <span className="discount">-{calculateDiscount()}%</span>
                    )}
                </div>

                <div className="quantity-selector">
                    <button 
                        onClick={() => setSelectedQuantity(Math.max(1, selectedQuantity - 1))}
                        className="quantity-btn"
                    >-</button>
                    <span className="quantity-value">{selectedQuantity}</span>
                    <button 
                        onClick={() => setSelectedQuantity(selectedQuantity + 1)}
                        className="quantity-btn"
                    >+</button>
                </div>

                <div className="productdisplay-right-buttons">
                    <button 
                        className={`add-to-cart ${isAddingToCart ? 'loading' : ''}`}
                        onClick={handleAddToCart}
                        disabled={isAddingToCart}
                    >
                        {isAddingToCart ? 'ADDING...' : 'ADD TO CART'}
                    </button>
                    <button className="buy-now">BUY NOW</button>
                </div>

                {!user && (
                    <div className="login-prompt">
                        <Link to="/login">Login to save to favorites</Link>
                    </div>
                )}

                <div className="product-features">
                    <div className="feature">
                        <FaTruck />
                        <div className="feature-text">
                            <span className="feature-title">Free Delivery</span>
                            <span className="feature-desc">On orders above ₹500</span>
                        </div>
                    </div>
                    <div className="feature">
                        <FaShieldAlt />
                        <div className="feature-text">
                            <span className="feature-title">1 Year Warranty</span>
                            <span className="feature-desc">Brand warranty</span>
                        </div>
                    </div>
                    <div className="feature">
                        <FaExchangeAlt />
                        <div className="feature-text">
                            <span className="feature-title">7 Days Return</span>
                            <span className="feature-desc">Easy returns</span>
                        </div>
                    </div>
                </div>

                <div className="product-details">
                    <h3>Specifications</h3>
                    <div className="specifications">
                        {Object.entries(product.specifications || {}).map(([key, value]) => (
                            <div key={key} className="spec-item">
                                <span className="spec-label">{key}:</span>
                                <span className="spec-value">{value}</span>
                            </div>
                        ))}
                    </div>
                    
                    <div className="description">
                        <h3>Description</h3>
                        <p>{product.description}</p>
                    </div>

                    {product && (
                        <ReviewSection 
                            productId={product._id || product.id} 
                            onReviewAdded={fetchReviews}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductDisplay;
