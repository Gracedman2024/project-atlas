import ProductCard from "./ProductCard";

function SearchResults({
  products,
  onViewDetails,
  wishlist,
  toggleWishlist
}) {

  if (products.length === 0) {

    return (
      <section className="products">
        <h2>No products found.</h2>
      </section>
    );

  }

  return (

    <section className="products">

      <h2>Search Results</h2>

      <div className="product-grid">

        {products.map((product) => (

          <ProductCard
  key={product.id}
  product={product}
  onViewDetails={onViewDetails}
  wishlist={wishlist}
  toggleWishlist={toggleWishlist}
/>

        ))}

      </div>

    </section>

  );

}

export default SearchResults;