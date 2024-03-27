import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

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

    toast.success("You have Read the book!", {
      position: "top-center",
    });
  } else {
    toast.error("Already Read the book !", {
      position: "top-center",
    });
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

    toast.success("You Have added Wishlist !", {
      position: "top-center",
    });
  } else if (exists) {
    toast.error("Already Added to the wish list !", {
      position: "top-center",
    });
  } else if (readBookExist) {
    toast.error("Already Read the book!", {
      position: "top-center",
    });
  }
};

export { saveReadBook, getStoredReadBook, getStoredWishList, saveWishList };
