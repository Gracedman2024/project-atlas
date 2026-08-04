import { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import AIAssistant from "./components/AIAssistant";
import FeaturedProducts from "./components/FeaturedProducts";
import SearchResults from "./components/SearchResults";
import ProductModal from "./components/ProductModal";
import ComparisonPanel from "./components/ComparisonPanel";
import CartDrawer from "./components/CartDrawer";
import Footer from "./components/Footer";

import products from "./data/products";

function App() {
  // -----------------------------
  // State
  // -----------------------------

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  const [comparisonList, setComparisonList] = useState([]);

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  // -----------------------------
  // Effects
  // -----------------------------

  useEffect(() => {
    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );
  }, [wishlist]);

  useEffect(() => {
  console.log("Current cart state:", cart);

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );
}, [cart]);

  // -----------------------------
  // Derived Data
  // -----------------------------

  const filteredProducts = products.filter((product) => {
    return (
      product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      product.category
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  });

  const comparedProducts = products.filter((product) =>
    comparisonList.includes(product.id)
  );

  const cartItemCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // -----------------------------
  // Handlers
  // -----------------------------

  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(
        wishlist.filter((id) => id !== productId)
      );
    } else {
      setWishlist([
        ...wishlist,
        productId
      ]);
    }
  };

  const toggleComparison = (productId) => {
    if (comparisonList.includes(productId)) {
      setComparisonList(
        comparisonList.filter(
          (id) => id !== productId
        )
      );
    } else {
      if (comparisonList.length >= 2) {
        alert(
          "You can compare only two products at a time."
        );
        return;
      }

      setComparisonList([
        ...comparisonList,
        productId
      ]);
    }
  };

  const addToCart = (product) => {
  console.log("Clicked:", product);

  const existingItem = cart.find(
    (item) => item.id === product.id
  );

  if (existingItem) {
    const updatedCart = cart.map((item) =>
      item.id === product.id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );

    console.log("Updated cart:", updatedCart);

    setCart(updatedCart);
  } else {
    const updatedCart = [
      ...cart,
      {
        ...product,
        quantity: 1,
      },
    ];

    console.log("Updated cart:", updatedCart);

    setCart(updatedCart);
  }

  setIsCartOpen(true);
};
  const increaseQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart(
      cart.flatMap((item) => {
        if (item.id !== productId) {
          return item;
        }

        if (item.quantity === 1) {
          return [];
        }

        return {
          ...item,
          quantity: item.quantity - 1,
        };
      })
    );
  };

  const removeFromCart = (productId) => {
    setCart(
      cart.filter((item) => item.id !== productId)
    );
  };

  // -----------------------------
  // Render
  // -----------------------------

  return (
    <div className="app">
      <Navbar
        wishlistCount={wishlist.length}
        cartCount={cartItemCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      <Hero />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <AIAssistant
  onViewDetails={setSelectedProduct}
  addToCart={addToCart}
/>

      <ComparisonPanel
        products={comparedProducts}
      />

      {searchTerm === "" ? (
        <FeaturedProducts
          onViewDetails={setSelectedProduct}
          wishlist={wishlist}
          toggleWishlist={toggleWishlist}
          comparisonList={comparisonList}
          toggleComparison={toggleComparison}
          addToCart={addToCart}
        />
      ) : (
        <SearchResults
          products={filteredProducts}
          onViewDetails={setSelectedProduct}
          wishlist={wishlist}
          toggleWishlist={toggleWishlist}
          comparisonList={comparisonList}
          toggleComparison={toggleComparison}
          addToCart={addToCart}
        />
      )}

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        cart={cart}
        onClose={() => setIsCartOpen(false)}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeFromCart={removeFromCart}
      />

      <Footer />
    </div>
  );
}

export default App;