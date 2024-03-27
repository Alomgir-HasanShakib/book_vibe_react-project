const getStoredReadBook = () => {
  const storedReadBook = localStorage.getItem("read-book");
  if (storedReadBook) {
    return JSON.parse(storedReadBook);
  }
  return [];
};

const saveReadBook = (id) => {
  const storedReadBook = getStoredReadBook();
  const exists = storedReadBook.find((bookId) => bookId === id);
  if (!exists) {
    storedReadBook.push(id);
    localStorage.setItem("read-book", JSON.stringify(storedReadBook));
  }
};

const getStoredWishList = () => {
  const getStoredWishlist = localStorage.getItem("wishList-book");
  if (getStoredWishlist) {
    return JSON.parse(getStoredWishlist);
  }
  return [];
};

const saveWishList = (id) => {
  const storeWishList = getStoredWishList();
  const storeReadList = getStoredReadBook();
  const readBookExist = storeReadList.find((bookId) => bookId === id);
  const exists = storeWishList.find((bookId) => bookId === id);
  if (!exists && !readBookExist) {
    storeWishList.push(id);
    localStorage.setItem("wishList-book", JSON.stringify(storeWishList));
  }
};

export { saveReadBook, getStoredReadBook, getStoredWishList, saveWishList };
