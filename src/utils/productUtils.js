import all_product from '../components/assets/all_product';

export const processProductData = (product) => {
    if (!product) return null;

    // Try to get local product data
    const localProduct = all_product.find(p => p.id === product.id);

    return {
        ...product,
        name: product.name || localProduct?.name || 'Cricket Equipment',
        description: product.description || localProduct?.description || 'High-quality cricket equipment',
        new_price: parseFloat(product.new_price) || localProduct?.new_price || 0,
        old_price: parseFloat(product.old_price) || localProduct?.old_price || 0,
        category: product.category || localProduct?.category || 'kits',
        specifications: product.specifications || localProduct?.specifications || {},
        features: product.features || localProduct?.features || [],
        reviews: product.reviews || [],
        averageRating: product.averageRating || 0,
        numReviews: product.numReviews || 0,
        brand: product.brand || localProduct?.brand || 'Premium Brand',
        image: product.image || localProduct?.image || `/src/components/assets/product_${product.id}.png`
    };
};

export const getProductById = (id) => {
    return all_product.find(p => p.id === parseInt(id));
}; 