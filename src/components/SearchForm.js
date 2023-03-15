import React from "react";
import "./searchForm.css";

const SearchForm = ({ handleSearchSubmit, handleInputChange }) => {
  return (
    <form className="search-form" onSubmit={handleSearchSubmit}>
      <input
        className="search-form__input"
        type="text"
        name="searchInput"
        placeholder="Search books..."
        onChange={handleInputChange}
      />

      <button className="search-form__button" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
