import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  getStoredReadBook,
  getStoredWishList,
} from "../../Utilities/Localstorage";
import ReadedBook from "./ReadedBook/ReadedBook";
import WishList from "./Wishlist/WishList";

const BookList = () => {
  const books = useLoaderData();
  const [readedBooks, setReadedBooks] = useState([]);
  const [wishedBooks, setWishedBooks] = useState([]);

  // const [sortReadingBook, setSortReadingBook] = useState([]);
  // const [sortWishedBook, seSortedtWishedBook] = useState([]);

  useEffect(() => {
    const storedReadingBook = getStoredReadBook();
    const storedWishedBook = getStoredWishList();

    if (books.length > 0) {
      const readedBook = books.filter((book) =>
        storedReadingBook.includes(book.bookId)
      );
      const wishedBook = books.filter((book) =>
        storedWishedBook.includes(book.bookId)
      );
      setReadedBooks(readedBook);
      setWishedBooks(wishedBook);
      //   setSortReadingBook(readedBook);
      //   seSortedtWishedBook(wishedBook);
    }
  }, []);

  const handleShortByRating = () => {
    const sortedReadBook = [...readedBooks].sort((a, b) => b.rating - a.rating);
    const sortedWishedBook = [...wishedBooks].sort(
      (a, b) => b.rating - a.rating
    );
    setWishedBooks(sortedWishedBook);
    setReadedBooks(sortedReadBook);
  };
  const handleShortByPage = () => {
    const sortedReadBook = [...readedBooks].sort(
      (a, b) => b.totalPages - a.totalPages
    );
    const sortedWishedBook = [...wishedBooks].sort(
      (a, b) => b.totalPages - a.totalPages
    );
    setReadedBooks(sortedReadBook);
    setWishedBooks(sortedWishedBook);
  };
  const handleShortByYear = () => {
    const sortedReadBook = [...readedBooks].sort(
      (a, b) => b.yearOfPublishing - a.yearOfPublishing
    );
    const sortedWishedBook = [...wishedBooks].sort(
      (a, b) => b.yearOfPublishing - a.yearOfPublishing
    );
    setWishedBooks(sortedWishedBook);
    setReadedBooks(sortedReadBook);
  };

  return (
    <div>
      {/* heading text  */}

      <div className="bg-[#1313130D] rounded-lg mt-9 mb-9 py-8">
        <h2 className="text-3xl font-bold text-[#131313] text-center">Books</h2>
      </div>
      {/* dropdown bar  */}

      <div className="flex justify-center mb-16">
        <details className="dropdown">
          <summary className="m-1 btn bg-[#23BE0A] px-10 py-3 text-[18px] font-semibold text-white">
            Sort By
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a onClick={handleShortByRating}>Rating</a>
            </li>
            <li>
              <a onClick={handleShortByPage}>Number Of page</a>
            </li>
            <li>
              <a onClick={handleShortByYear}>Published Year</a>
            </li>
          </ul>
        </details>
      </div>
      {/* main content area  */}

      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-xl"
          aria-label="Read Books"
          checked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div>
            {readedBooks.map((readedbook) => (
              <ReadedBook
                key={readedbook.bookId}
                readedbook={readedbook}
              ></ReadedBook>
            ))}
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-xl"
          aria-label="Wishlist Books"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div>
            {wishedBooks.map((book) => (
              <WishList key={book.bookId} book={book}></WishList>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookList;
