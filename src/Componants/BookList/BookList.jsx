import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "../../Utilities/Localstorage";

const BookList = () => {
  const books = useLoaderData();
  useEffect(() => {
    const storedReadingBook = getStoredReadBook();
    console.log(books, storedReadingBook);

    if (books.length > 0) {
      const readedBook = books.filter((book) =>
        storedReadingBook.includes(book.bookId)
      );
      console.log(readedBook);
    }
  }, []);
  return (
    <div>
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Tab 1"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          Tab content 1
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Tab 2"
          checked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          Tab content 2
        </div>
      </div>
    </div>
  );
};

export default BookList;
