import React, { useContext, useEffect } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../context/ShopContext';
import { useAdmin } from '../context/AdminContext';
import Item from '../components/Item/Item';
import dropdown_icon from '../components/assets/dropdown_icon.png';

const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);
    const { adminProducts = [], loading, error } = useAdmin();  // Default to empty array

    // Debug logging
    useEffect(() => {
        console.log('Static products:', all_product);
        console.log('Admin products:', adminProducts);
        console.log('Current category:', props.category);
    }, [all_product, adminProducts, props.category]);

    // Combine static and admin products safely
    const allProducts = [...all_product, ...adminProducts];

    // Filter products by category
    const categoryProducts = allProducts.filter(item => 
        item.category?.toLowerCase() === props.category?.toLowerCase()
    );

    if (loading) {
        return <div className="loading">Loading products...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    if (categoryProducts.length === 0) {
        return <div className="no-products">No products found in this category</div>;
    }

    return (
        <div className='shop-category'>
            {props.banner && (
                <img className='shopcategory-banner' src={props.banner} alt="" />
            )}
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing {categoryProducts.length} products</span>
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
                {categoryProducts.map((item) => (
                    <Item
                        key={item.id || item._id}
                        id={item.id || item._id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />
                ))}
            </div>
        </div>
    );
};

export default ShopCategory;
