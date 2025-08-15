function SearchBar({ searchValue, setSearchValue, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      onSearch(searchValue);
    }
  };

  return (
    <div className="search-box">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search for movies..."
        />
      </form>
    </div>
  );
}

export default SearchBar;
