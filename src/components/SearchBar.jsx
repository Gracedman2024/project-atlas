function SearchBar({ searchTerm, setSearchTerm }) {

  return (

    <section className="search-section">

      <h2>

        Search Products

      </h2>

      <input
        type="text"
        placeholder="Search laptops, phones, kitchen appliances..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

    </section>

  );

}

export default SearchBar;