function ProductCard({ product, onViewDetails }) {
  return (
    <div className="card">

      <div className="card-top">

        <span className={`badge ${product.badge.toLowerCase().replace(" ", "-")}`}>
          {product.badge}
        </span>

        <button className="wishlist-btn">
          ❤️
        </button>

      </div>

      <div className="product-image">

  <img
    src={product.image}
    alt={product.name}
    className="product-photo"
  />

</div>

      <h3>{product.name}</h3>

      <p className="category">
        {product.category}
      </p>

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
        className="details-btn"
        onClick={() => onViewDetails(product)}
      >
        View Details
      </button>

    </div>
  );
}

export default ProductCard;