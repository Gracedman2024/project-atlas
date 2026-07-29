import "./CartDrawer.css";

function CartDrawer({
  isOpen,
  cart,
  onClose,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) {
  const total = cart.reduce(
    (sum, item) => {
      const price = Number(
        String(item.price).replace(/[^0-9.]/g, "")
      );

      return sum + price * item.quantity;
    },
    0
  );

  return (
    <div
      className={`cart-overlay ${
        isOpen ? "active" : ""
      }`}
      onClick={onClose}
    >
      <aside
        className={`cart-drawer ${
          isOpen ? "open" : ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cart-header">
          <h2>Shopping Cart</h2>

          <button
            className="close-cart"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <h3>Your cart is empty</h3>

            <p>
              Add products to begin shopping.
            </p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div
                  className="cart-item"
                  key={item.id}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="cart-info">
                    <h4>{item.name}</h4>

                    <p>{item.price}</p>

                    <div className="quantity-controls">
                      <button
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="remove-btn"
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <h3>
                Total: $
                {total.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </h3>

              <button className="checkout-btn">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

export default CartDrawer;