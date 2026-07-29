function ProductCard({
  product,
  onViewDetails,
  wishlist,
  toggleWishlist,
  comparisonList,
  toggleComparison,
  addToCart
}) {
return (
    <div className="card">

      <div className="card-top">

        <span className={`badge ${product.badge.toLowerCase().replace(" ", "-")}`}>
          {product.badge}
        </span>

        <button
  className="wishlist-btn"
  onClick={() => toggleWishlist(product.id)}
>
  {wishlist.includes(product.id) ? "❤️" : "🤍"}
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

      <div className="compare-option">

  <label>

    <input
      type="checkbox"
      checked={comparisonList.includes(product.id)}
      onChange={() => toggleComparison(product.id)}
    />

    Compare

  </label>

</div>

<div className="card-buttons">

  <button
    className="details-btn"
    onClick={() => onViewDetails(product)}
  >
    View Details
  </button>

  <button
    className="cart-btn"
    onClick={() => addToCart(product)}
  >
    Add to Cart
  </button>

</div>

    </div>
  );
}

export default ProductCard;