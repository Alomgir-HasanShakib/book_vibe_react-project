import { IoLocationOutline } from "react-icons/io5";
import { PiUsers } from "react-icons/pi";
import { MdOutlineContactPage } from "react-icons/md";
import { Link } from "react-router-dom";

const WishList = ({ book }) => {
  const {
    bookId,
    yearOfPublishing,
    publisher,
    tags,
    category,
    rating,
    totalPages,
    image,
    author,
    bookName,
  } = book;
  return (
    <div>
      <div className="flex flex-col md:flex-row card-side bg-base-100 shadow-xl mt-10 p-2 md:p-6 mb-10 border-[#13131326] border">
        <figure className="bg-[#1313130D] px-12 py-7 rounded-lg">
          <img className="w-28 h-40" src={image} alt="images" />
        </figure>
        <div className="card-body sans space-y-4">
          <h2 className="font-bold text-2xl fair-dis text-[#131313]">
            {bookName}
          </h2>
          <p className="text-[#131313CC]">By : {author}</p>
          <p className="flex flex-col md:flex-row gap-1 md:gap-3 font-bold text-[#131313] items-center">
            Tags :
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-[#23BE0A0D] text-[#23BE0A] px-2 md:px-4 py-1 md:py-2 rounded-full "
              >
                # {tag}
              </span>
            ))}
            <span className="text-[#131313CC] font-normal flex gap-2 items-center text-[16px]">
              <IoLocationOutline className="text-2xl" /> Years of Publishing:{" "}
              {yearOfPublishing}
            </span>
          </p>
          <p className="flex flex-col md:flex-row mr-2 text-[#13131399] items-center gap-4">
            <span className="flex gap-1">
              {" "}
              <PiUsers className="text-2xl" /> Publisher: {publisher}
            </span>
            <span className="flex md:items-center gap-2 ">
              {" "}
              <MdOutlineContactPage className="text-2xl" />
              Pages: {totalPages}
            </span>
          </p>
          <div className="card-actions">
            <button className="btn bg-[#328EFF26] hover:bg-transparent hover:border-[#328EFF] text-[#328EFF] rounded-full px-1 md:px-5 ">
              Category: {category}
            </button>
            <button className="btn bg-[#FFAC3326] hover:bg-transparent hover:border-[#FFAC33] text-[#FFAC33] rounded-full px-1 md:px-5 ">
              Rating: {rating}
            </button>
            <Link to={`/bookDetails/${bookId}`}>
              <button className="btn hover:bg-transparent hover:border-[#23BE0A] hover:text-[#23BE0A] rounded-full px-5 primary-bg text-[18px] font-medium text-white">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
