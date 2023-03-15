import { useState, useMemo } from "react";
import allBooks from "./utils/listofbooks.json";
import BookList from "./components/BookList";
import SearchForm from "./components/SearchForm";
import SortDropdown from "./components/SortDropdown";
import { filterBooks } from "./utils/functions/filterBooks";
import { sortBooks } from "./utils/functions/sortBooks";
import "./app.css";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [sortedBy, setSortedBy] = useState("title");

  const filteredBooks = useMemo(() => {
    const filtered = filterBooks(allBooks, searchQuery);
    const sorted = sortBooks(filtered, sortedBy);
    return sorted;
  }, [searchQuery, sortedBy]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "searchInput":
        setSearchInput(value);
        break;
      case "sortSelect":
        setSortedBy(value);
        break;
      default:
        break;
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(searchInput);
  };

  return (
    <div className="app">
      <h1 className="app__title">Petar's Books App</h1>
      <SearchForm
        handleSearchSubmit={handleSearchSubmit}
        handleInputChange={handleInputChange}
      />
      <SortDropdown
        sortedBy={sortedBy}
        handleSelectChange={handleInputChange}
      />
      <BookList books={filteredBooks} />
    </div>
  );
};

export default App;
