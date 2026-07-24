function ProductModal({ product, onClose }) {

  if (!product) return null;

  return (

    <div className="modal-overlay">

      <div className="modal">

        <div className="modal-image">

          {product.image}

        </div>

        <h2>{product.name}</h2>

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

        <button
          className="buy-btn"
          onClick={onClose}
        >

          Close

        </button>

      </div>

    </div>

  );

}

export default ProductModal;