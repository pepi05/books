import bookList from "./utils/listofbooks.json";

const App = () => {
  return (
    <div>
      <h1>Books app</h1>

      {bookList.map((book) => (
        <div key={book.title}>
          <h2>{book.title}</h2>
          <p>Author: {book.author}</p>
          <p>Genre: {book.genre}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
