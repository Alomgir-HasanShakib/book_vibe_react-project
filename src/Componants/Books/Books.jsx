import React, { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  console.log(books);
  return (
    <div className="mb-14">
      <div>
        <h2 className="text-[40px] font-bold fair-dis text-center">Books</h2>
      </div>
      <div>
        {books.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
