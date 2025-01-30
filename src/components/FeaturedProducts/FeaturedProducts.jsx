import React from 'react'
import './FeaturedProducts.css'
import { Link } from 'react-router-dom'
import product1 from '../assets/product_1.png'
import product2 from '../assets/product_2.png'
import product3 from '../assets/product_3.png'
import product4 from '../assets/product_4.png'
import product5 from '../assets/product_5.png'
import product6 from '../assets/product_6.png'

const FeaturedProducts = () => {
    const products = [
        {
            id: 1,
            name: "MRF Cricket Bat",
            price: "₹2999",
            image: product1,
            oldPrice: "₹3999",
            discount: "25% OFF",
            category: "Bats"
        },
        {
            id: 2,
            name: "SG Cricket Ball",
            price: "₹499",
            image: product2,
            oldPrice: "₹699",
            discount: "30% OFF",
            category: "Balls"
        },
        {
            id: 3,
            name: "Premium Cricket Kit",
            price: "₹5999",
            image: product3,
            oldPrice: "₹7999",
            discount: "25% OFF",
            category: "Kits"
        },
        {
            id: 4,
            name: "Cricket Helmet",
            price: "₹1999",
            image: product4,
            oldPrice: "₹2499",
            discount: "20% OFF",
            category: "Protection"
        },
        {
            id: 5,
            name: "Batting Pads",
            price: "₹1499",
            image: product5,
            oldPrice: "₹1999",
            discount: "25% OFF",
            category: "Protection"
        },
        {
            id: 6,
            name: "Cricket Shoes",
            price: "₹2499",
            image: product6,
            oldPrice: "₹2999",
            discount: "15% OFF",
            category: "Footwear"
        }
    ]

    return (
        <div className='featured-products'>
            <h1>Featured Products</h1>
            <hr />
            <div className="products">
                {products.map((product) => (
                    <Link to={`/product/${product.id}`} key={product.id} className="product">
                        <div className="product-image">
                            <img src={product.image} alt={product.name} />
                            <div className="discount-tag">{product.discount}</div>
                        </div>
                        <div className="product-details">
                            <h3>{product.name}</h3>
                            <div className="price-container">
                                <p className="price">{product.price}</p>
                                <p className="old-price">{product.oldPrice}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts 