import React from "react";

function Search({ search, handleSearch, clickSubmit }) {
  return (
    <div className="search-section">
      <input
        type="text"
        placeholder="Search for news or articles"
        value={search}
        onChange={handleSearch}
      />
      <button onClick={clickSubmit} type="submit">
        Search
      </button>
    </div>
  );
}

export default Search;
