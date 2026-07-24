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

  const filteredProducts = products.filter((product) => {

    return (

      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||

      product.category.toLowerCase().includes(searchTerm.toLowerCase())

    );

  });

  return (

    <div className="app">

      <Navbar />

      <Hero />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {searchTerm === "" ? (

        <FeaturedProducts
          onViewDetails={setSelectedProduct}
        />

      ) : (

        <SearchResults
          products={filteredProducts}
          onViewDetails={setSelectedProduct}
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