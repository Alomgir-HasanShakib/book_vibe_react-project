import { useLoaderData, useParams } from "react-router-dom";
// import toast, { Toaster } from "react-hot-toast";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { saveReadBook, saveWishList } from "../../Utilities/Localstorage";

const BookDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const job = jobs.find((job) => job.bookId === parseInt(id));
  const {
    yearOfPublishing,
    publisher,
    tags,
    category,
    rating,
    totalPages,
    review,
    bookName,
    author,
    image,
  } = job;

  const handleReadButton = (id) => {
    saveReadBook(parseInt(id));
  };
  const handleWishtListBtn = (id) => {
    // toast("You have added this in wish list");
    saveWishList(parseInt(id));
  };

  return (
    <div className="mt-16 mb-16 px-3">
      <div className="card lg:card-side shadow-xl sans">
        <figure className="p-6 md:p-16 bg-[#1313130D]">
          <img src={image} alt="Album" className="h-48 md:h-[564px]" />
        </figure>
        <div className="ml-4 md:ml-10 space-y-2 md:space-y-6">
          <h2 className=" fair-dis text-3xl md:text-[40px] font-bold text-[#131313]">
            {bookName}
          </h2>
          <p className="text-xl font-medium text-[#131313CC]">By: {author}</p>
          <hr />
          <p className="text-xl font-medium text-[#131313CC]">{category}</p>
          <hr />
          <p className="text-[#131313B2]">
            <span className="font-bold text-xl text-[#131313]">Review:</span>
            {review}
          </p>
          <p>
            <span className="font-bold text-[16px]">Tag</span>{" "}
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="t-primary md:mr-3  bg-[#23BE0A0D] px-2 md:px-4 py-2 cursor-pointer rounded-lg "
              >
                #{tag}
              </span>
            ))}
          </p>
          <hr />
          <div>
            <table>
              <tbody>
                <tr>
                  <td className="pr-24 ">Number of Pages:</td>
                  <td className="font-bold">{totalPages}</td>
                </tr>
                <tr>
                  <td>Publisher:</td>
                  <td className="font-bold">{publisher}</td>
                </tr>
                <tr>
                  <td>Year of Publishing:</td>
                  <td className="font-bold">{yearOfPublishing}</td>
                </tr>
                <tr>
                  <td>Rating:</td>
                  <td className="font-bold">{rating}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card-actions mt-6 ">
            <button
              onClick={() => handleReadButton(id)}
              className="btn bg-transparent border text-[18px] font-semibold px-7"
            >
              Read
            </button>
            <button
              onClick={() => handleWishtListBtn(id)}
              className="btn bg-[#50B1C9] hover:bg-transparent hover:border-[#50B1C9] text-white hover:text-[#50B1C9] mb-10"
            >
              Wishlist
            </button>
          </div>
        </div>
        {/* <Toaster /> */}
        <ToastContainer />
      </div>
    </div>
  );
};

export default BookDetails;
