import React from "react";

const BookList = ({ books }) => {
  if (books.length === 0) {
    return <h1>No Results Found...</h1>;
  }
  return (
    <div>
      {books.map((book) => {
        return (
          <div key={book.title}>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
