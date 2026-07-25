function Navbar({ wishlistCount }) {
  return (
    <header className="navbar">

      <div className="logo">
        Project ATLAS
      </div>

      <nav>

        <a href="#">Home</a>

        <a href="#">Categories</a>

        <a href="#">Products</a>

        <a href="#">Reviews</a>

        <a href="#">
  ❤️ Wishlist ({wishlistCount})
</a>

        <a href="#">About</a>

        <a href="#">Contact</a>

      </nav>

    </header>
  );
}

export default Navbar;