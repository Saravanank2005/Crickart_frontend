import React, { useState } from 'react';
import './ProductPage.css';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { useUserAuth } from '../../context/UserAuthContext';
import { Link } from 'react-router-dom';
import Reviews from '../../components/Reviews/Reviews';
import { useFavorites } from '../../context/FavoritesContext';
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay';

const ProductPage = () => {
    const { id } = useParams();
    const { addToCart, products } = useContext(ShopContext);
    const { toggleFavorite, isFavorite } = useFavorites();
    const { user } = useUserAuth();
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [review, setReview] = useState('');
    
    const product = products.find(p => p._id === id);

    if (!product) return <div>Product not found</div>;

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        // Add your review submission logic here
        console.log({ rating, review, userId: user?.uid, productId: id });
    };

    return (
        <div className="product-page">
            <ProductDisplay 
                product={product} 
                onAddToCart={addToCart}
                onToggleFavorite={toggleFavorite}
                isFavorite={isFavorite(product._id)}
            />
            <Reviews productId={id} />
        </div>
    );
};

export default ProductPage; 