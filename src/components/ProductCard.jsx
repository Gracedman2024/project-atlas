function ProductCard({ product, onViewDetails }) {
  return (
    <div className="card">

      <div className="product-image">
        {product.image}
      </div>

      <span className="category">
        {product.category}
      </span>

      <h3>
        {product.name}
      </h3>

      <p className="price">
        {product.price}
      </p>

      <p className="rating">
        {product.rating}
      </p>

      <p className="description">
        {product.description}
      </p>

      <button
        className="buy-btn"
        onClick={() => onViewDetails(product)}
      >
        View Details
      </button>

    </div>
  );
}

export default ProductCard;