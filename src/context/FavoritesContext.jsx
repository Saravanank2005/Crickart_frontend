import React, { createContext, useState, useContext, useEffect } from 'react';
import { useUserAuth } from './UserAuthContext';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        try {
            const saved = localStorage.getItem('favorites');
            return saved ? JSON.parse(saved) : [];
        } catch (error) {
            console.error('Error loading favorites:', error);
            return [];
        }
    });

    const { user } = useUserAuth();

    useEffect(() => {
        try {
            localStorage.setItem('favorites', JSON.stringify(favorites));
        } catch (error) {
            console.error('Error saving favorites:', error);
        }
    }, [favorites]);

    const toggleFavorite = (productId) => {
        if (!user) {
            console.log('User must be logged in to manage favorites');
            return;
        }
        if (!productId) {
            console.error('Product ID is required');
            return;
        }

        setFavorites(prevFavorites => {
            const productIdStr = productId.toString();
            if (prevFavorites.includes(productIdStr)) {
                return prevFavorites.filter(id => id !== productIdStr);
            } else {
                return [...prevFavorites, productIdStr];
            }
        });
    };

    const isFavorite = (productId) => {
        if (!productId) return false;
        return favorites.includes(productId.toString());
    };

    return (
        <FavoritesContext.Provider value={{ 
            favorites, 
            toggleFavorite, 
            isFavorite,
            isLoading: false,
            error: null 
        }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error('useFavorites must be used within a FavoritesProvider');
    }
    return context;
}; 