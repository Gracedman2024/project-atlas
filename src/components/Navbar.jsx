import "./Navbar.css";

function Navbar({
  wishlistCount,
  cartCount,
  onCartClick
}) {
  return (
    <header className="navbar">

      <div className="logo">
        Project ATLAS
      </div>

      <nav>

        <a href="#">
          Home
        </a>

        <a href="#">
          Categories
        </a>

        <a href="#">
          Products
        </a>

        <a href="#">
          Reviews
        </a>

        <a href="#">
          ❤️ Wishlist ({wishlistCount})
        </a>

        <button
          className="cart-nav-btn"
          onClick={onCartClick}
        >
          🛒 Cart ({cartCount})
        </button>

        <a href="#">
          About
        </a>

        <a href="#">
          Contact
        </a>

      </nav>

    </header>
  );
}

export default Navbar;