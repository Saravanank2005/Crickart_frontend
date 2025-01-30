import React, { useState, useEffect } from 'react';
import './Reviews.css';
import { FaStar, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useUserAuth } from '../../context/UserAuthContext';

const Reviews = ({ productId }) => {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState({ rating: 5, comment: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user } = useUserAuth();

    useEffect(() => {
        fetchReviews();
    }, [productId]);

    const fetchReviews = async () => {
        try {
            setLoading(true);
            const response = await fetch(`http://localhost:4000/api/products/${productId}/reviews`);
            if (!response.ok) throw new Error('Failed to fetch reviews');
            const data = await response.json();
            setReviews(data.reviews || []);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmitReview = async (e) => {
        e.preventDefault();
        if (!user) return;

        try {
            const response = await fetch(`http://localhost:4000/api/products/${productId}/reviews`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
                body: JSON.stringify(newReview)
            });

            if (!response.ok) throw new Error('Failed to submit review');
            await fetchReviews();
            setNewReview({ rating: 5, comment: '' });
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="reviews-container">
            <div className="reviews-header">
                <h2>Customer Reviews</h2>
                <div className="rating-overview">
                    <div className="rating-big">
                        {reviews.length > 0 ? (
                            <>
                                <span className="rating-number">
                                    {(reviews.reduce((acc, rev) => acc + rev.rating, 0) / reviews.length).toFixed(1)}
                                </span>
                                <div className="rating-stars">
                                    {[1,2,3,4,5].map(star => (
                                        <FaStar 
                                            key={star}
                                            className={star <= (reviews.reduce((acc, rev) => acc + rev.rating, 0) / reviews.length) 
                                                ? 'star-filled' 
                                                : 'star-empty'
                                            }
                                        />
                                    ))}
                                </div>
                                <span className="reviews-count">Based on {reviews.length} reviews</span>
                            </>
                        ) : (
                            <>
                                <span className="rating-number">0.0</span>
                                <div className="rating-stars">
                                    {[1,2,3,4,5].map(star => (
                                        <FaStar key={star} className="star-empty" />
                                    ))}
                                </div>
                                <span className="reviews-count">No reviews yet</span>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <div className="reviews-content">
                <div className="reviews-list">
                    {loading ? (
                        <div className="loading">Loading reviews...</div>
                    ) : error ? (
                        <div className="error">{error}</div>
                    ) : reviews.length === 0 ? (
                        <div className="no-reviews">No reviews yet</div>
                    ) : (
                        reviews.map((review, index) => (
                            <div key={index} className="review-item">
                                <div className="review-user">
                                    <FaUser className="user-icon" />
                                    <span>{review.userName || 'Anonymous'}</span>
                                </div>
                                <div className="review-rating">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className={i < review.rating ? 'star-filled' : 'star-empty'}
                                        />
                                    ))}
                                </div>
                                <div className="review-date">
                                    {new Date(review.date).toLocaleDateString()}
                                </div>
                                <p className="review-text">{review.comment}</p>
                            </div>
                        ))
                    )}
                </div>

                <div className="write-review">
                    <h3>Write a Review</h3>
                    {user ? (
                        <form onSubmit={handleSubmitReview}>
                            <div className="rating-select">
                                {[5,4,3,2,1].map(star => (
                                    <FaStar
                                        key={star}
                                        className={star <= newReview.rating ? 'star-filled' : 'star-empty'}
                                        onClick={() => setNewReview({...newReview, rating: star})}
                                    />
                                ))}
                            </div>
                            <textarea
                                value={newReview.comment}
                                onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                                placeholder="Write your review here..."
                                required
                            />
                            <button type="submit" className="submit-review">
                                Submit Review
                            </button>
                        </form>
                    ) : (
                        <div className="login-prompt">
                            <Link to="/login">Login to write a review</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Reviews; 