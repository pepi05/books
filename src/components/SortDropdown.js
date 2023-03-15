import React from "react";
import "./sortDropdown.css";

const SortDropdown = ({ sortedBy, handleSelectChange }) => {
  return (
    <div className="sort-dropdown">
      <label className="sort-dropdown__label">Sort by:</label>
      <select
        className="sort-dropdown__select"
        value={sortedBy}
        name="sortSelect"
        onChange={handleSelectChange}
      >
        <option className="sort-dropdown__option" value="title">
          Title
        </option>
        <option className="sort-dropdown__option" value="author">
          Author
        </option>
        <option className="sort-dropdown__option" value="genre">
          Genre
        </option>
      </select>
    </div>
  );
};

export default SortDropdown;
