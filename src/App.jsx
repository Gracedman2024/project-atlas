import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import FeaturedProducts from "./components/FeaturedProducts";
import SearchResults from "./components/SearchResults";
import ProductModal from "./components/ProductModal";
import Footer from "./components/Footer";

import products from "./data/products";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter((id) => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  return (
    <div className="app">
      <Navbar wishlistCount={wishlist.length} />

      <Hero />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {searchTerm === "" ? (
        <FeaturedProducts
          onViewDetails={setSelectedProduct}
          wishlist={wishlist}
          toggleWishlist={toggleWishlist}
        />
      ) : (
        <SearchResults
  products={filteredProducts}
  onViewDetails={setSelectedProduct}
  wishlist={wishlist}
  toggleWishlist={toggleWishlist}
/>
      )}

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <Footer />
    </div>
  );
}

export default App;