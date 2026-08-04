function AIProductCard({
  product,
  onViewDetails,
  addToCart,
}) {
  if (!product) return null;

  return (
    <div className="ai-product-card">

      <img
        src={product.image}
        alt={product.name}
        className="ai-product-image"
      />

      <div className="ai-product-info">

        <h3>{product.name}</h3>

        <p>{product.rating}</p>

        <p>{product.price}</p>

        <div className="ai-product-buttons">

          <button
            onClick={() => onViewDetails(product)}
          >
            View Details
          </button>

          <button
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default AIProductCard;