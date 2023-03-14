import React from "react";

const SortDropdown = ({ sortedBy, handleSelectChange }) => {
  return (
    <div>
      <label>Sort by:</label>
      <select value={sortedBy} name="sortSelect" onChange={handleSelectChange}>
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="genre">Genre</option>
      </select>
    </div>
  );
};

export default SortDropdown;
