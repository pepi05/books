import React from "react";

const SearchForm = ({ handleSearchSubmit, handleInputChange }) => {
  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        type="text"
        name="searchInput"
        placeholder="Search books by title, author name or genre"
        onChange={handleInputChange}
      />

      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
