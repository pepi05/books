import React from "react";
import "./bookList.css";

const BookList = ({ books }) => {
  if (books.length === 0) {
    return <h1 className="book-list--empty">No Results Found...</h1>;
  }
  return (
    <div className="book-list">
      {books.map((book) => {
        return (
          <div key={book.title} className="book-list__book">
            <h2 className="book-list__title">{book.title}</h2>
            <p className="book-list__author">Author: {book.author}</p>
            <p className="book-list__genre">Genre: {book.genre}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
