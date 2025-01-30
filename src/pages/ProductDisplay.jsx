function ProductDisplay() {
  const handleImageError = (e) => {
    e.target.src = '/path/to/default-image.png'; // Add a default image path
    console.log('Using fallback image');
  };

  return (
    <div className="product-display">
      <img 
        src={product.image} 
        alt={product.name}
        onError={handleImageError}
        className="product-image"
      />
    </div>
  );
} 