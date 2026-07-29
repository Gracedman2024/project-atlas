function ComparisonPanel({ products }) {

  if (products.length !== 2) {
    return null;
  }

  return (

    <section className="comparison-panel">

      <h2>Product Comparison</h2>

      <table className="comparison-table">

        <thead>

          <tr>

            <th>Feature</th>

            <th>{products[0].name}</th>

            <th>{products[1].name}</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>Image</td>

            <td>
              <img
                src={products[0].image}
                alt={products[0].name}
                className="comparison-image"
              />
            </td>

            <td>
              <img
                src={products[1].image}
                alt={products[1].name}
                className="comparison-image"
              />
            </td>

          </tr>

          <tr>

            <td>Category</td>

            <td>{products[0].category}</td>

            <td>{products[1].category}</td>

          </tr>

          <tr>

            <td>Price</td>

            <td>{products[0].price}</td>

            <td>{products[1].price}</td>

          </tr>

          <tr>

            <td>Rating</td>

            <td>{products[0].rating}</td>

            <td>{products[1].rating}</td>

          </tr>

          <tr>

            <td>Description</td>

            <td>{products[0].description}</td>

            <td>{products[1].description}</td>

          </tr>

        </tbody>

      </table>

    </section>

  );

}

export default ComparisonPanel;