export const sortBooks = (books, sortedBy) => {
  switch (sortedBy) {
    case "title":
      return books.sort((a, b) => a.title.localeCompare(b.title));
    case "author":
      return books.sort((a, b) => a.author.localeCompare(b.author));
    case "genre":
      return books.sort((a, b) => a.genre.localeCompare(b.genre));
    default:
      return books.sort((a, b) => a.title.localeCompare(b.title));
  }
};
