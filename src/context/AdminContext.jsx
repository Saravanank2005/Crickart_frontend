import React, { createContext, useContext, useState } from 'react';

const AdminContext = createContext();

export const useAdmin = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
    const [adminData, setAdminData] = useState(null);

    const fetchProducts = async () => {
        try {
            const token = localStorage.getItem('adminToken');
            
            const response = await fetch('http://localhost:4000/api/admin/products', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();
            console.log('API Response:', data);

            // Return the data directly as it comes from the API
            if (response.ok) {
                return {
                    success: true,
                    products: data.products || []
                };
            } else {
                throw new Error(data.message || 'Failed to fetch products');
            }
        } catch (error) {
            console.error('Error fetching products:', error);
            return {
                success: false,
                products: [],
                error: error.message
            };
        }
    };

    const deleteProduct = async (productId) => {
        try {
            const token = localStorage.getItem('adminToken');
            const response = await fetch(`http://localhost:4000/api/admin/products/${productId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to delete product');
            }

            return true;
        } catch (error) {
            console.error('Error deleting product:', error);
            return false;
        }
    };

    return (
        <AdminContext.Provider value={{
            adminData,
            setAdminData,
            fetchProducts,
            deleteProduct
        }}>
            {children}
        </AdminContext.Provider>
    );
}; 