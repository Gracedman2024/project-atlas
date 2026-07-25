import products from "../data/products";
import ProductCard from "./ProductCard";

function FeaturedProducts({
  onViewDetails,
  wishlist,
  toggleWishlist
}) {
  return (
    <section className="products">

      <h2>
        Featured Products
      </h2>

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

export default FeaturedProducts;