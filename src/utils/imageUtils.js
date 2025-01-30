export const getImageUrl = (imagePath) => {
    if (!imagePath) return '/images/placeholder.png';

    // If it's already a full URL, return as is
    if (imagePath.startsWith('http')) {
        return imagePath;
    }

    // If it's a relative path, prepend the backend URL
    if (imagePath.startsWith('/')) {
        return `http://localhost:4000${imagePath}`;
    }

    // For static images
    return imagePath;
};

export const handleImageError = (e) => {
    console.error('Image failed to load:', e.target.src);
    e.target.src = '/images/placeholder.png';
}; 