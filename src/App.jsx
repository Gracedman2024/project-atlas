import { useState, useEffect } from "react";
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
  const [wishlist, setWishlist] = useState(() => {
  

  const savedWishlist = localStorage.getItem("wishlist");

  return savedWishlist ? JSON.parse(savedWishlist) : [];

});

const [comparisonList, setComparisonList] = useState([]);

useEffect(() => {

  localStorage.setItem(
    "wishlist",
    JSON.stringify(wishlist)
  );

}, [wishlist]);

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

  const toggleComparison = (productId) => {

  if (comparisonList.includes(productId)) {

    setComparisonList(
      comparisonList.filter((id) => id !== productId)
    );

  } else {

    if (comparisonList.length >= 2) {

      alert("You can compare only two products at a time.");

      return;

    }

    setComparisonList([
      ...comparisonList,
      productId
    ]);

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
  comparisonList={comparisonList}
  toggleComparison={toggleComparison}
/>
      ) : (
      <SearchResults
  products={filteredProducts}
  onViewDetails={setSelectedProduct}
  wishlist={wishlist}
  toggleWishlist={toggleWishlist}
  comparisonList={comparisonList}
  toggleComparison={toggleComparison}
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