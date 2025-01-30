import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { useAdmin } from '../context/AdminContext';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import './CSS/Product.css';

const Product = () => {
    const { productId } = useParams();
    const { all_product = [] } = useContext(ShopContext) || {};  // Default empty array
    const { adminProducts = [] } = useAdmin() || {};  // Default empty array
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const findProduct = async () => {
            try {
                setLoading(true);
                console.log('🔍 Looking for product:', productId);

                if (!Array.isArray(adminProducts)) {
                    console.warn('⚠️ adminProducts is not an array:', adminProducts);
                    return;
                }

                if (!Array.isArray(all_product)) {
                    console.warn('⚠️ all_product is not an array:', all_product);
                    return;
                }

                // 🔹 Check in admin products (MongoDB uses _id)
                const adminProduct = adminProducts.find(p => p._id === productId);
                if (adminProduct) {
                    console.log('✅ Found in admin products:', adminProduct);
                    setProduct({
                        ...adminProduct,
                        image: adminProduct.image.startsWith('/upload/')
                            ? `http://localhost:4000${adminProduct.image}`
                            : adminProduct.image
                    });
                    return;
                }

                // 🔹 Check in static products (Uses id)
                const staticProduct = all_product.find(p => p.id === parseInt(productId));
                if (staticProduct) {
                    console.log('✅ Found in static products:', staticProduct);
                    setProduct(staticProduct);
                    return;
                }

                // 🔹 Fetch product from API if it's a valid MongoDB ObjectId
                if (productId.match(/^[0-9a-fA-F]{24}$/)) {
                    console.log('📡 Fetching product from API...');
                    const response = await fetch(`http://localhost:4000/api/products/${productId}`);
                    if (!response.ok) {
                        throw new Error('Product not found in API');
                    }
                    const data = await response.json();
                    if (data.success && data.product) {
                        const apiProduct = {
                            ...data.product,
                            image: data.product.image.startsWith('/upload/')
                                ? `http://localhost:4000${data.product.image}`
                                : data.product.image
                        };
                        console.log('✅ Found API product:', apiProduct);
                        setProduct(apiProduct);
                    } else {
                        throw new Error('Invalid product data received from API');
                    }
                } else {
                    throw new Error('Product not found in any source');
                }
            } catch (err) {
                console.error('❌ Error finding product:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        // Only search when productId is valid
        if (productId) {
            findProduct();
        } else {
            setError('Invalid product ID');
            setLoading(false);
        }
    }, [productId, all_product, adminProducts]);

    if (loading) {
        return <div className="loading">⏳ Loading product...</div>;
    }

    if (error) {
        return <div className="error">❌ Error: {error}</div>;
    }

    if (!product) {
        return <div className="error">⚠️ Product not found</div>;
    }

    return (
        <div className="product">
            <ProductDisplay product={product} />
            <DescriptionBox description={product.description} />
        </div>
    );
};

export default Product;
