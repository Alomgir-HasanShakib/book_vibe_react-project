import { FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
  const { tags, category, rating, author, bookName, image, bookId } = book;
  return (
    <div>
      {/* =================== Card =========================== */}

      <Link to={`/bookDetails/${bookId}`}>
        <div className="card card-compact md:h-[506px]  bg-base-100 shadow-xl p-6">
          <figure className="bg-[#F3F3F3] rounded-lg p-10">
            <img src={image} alt="" className="w-28" />
          </figure>
          <div className="card-body sans mt-6">
            <div>
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[16px] font-medium t-primary mr-3  bg-[#23BE0A0D] px-4 py-2 cursor-pointer rounded-lg "
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className=" text-2xl font-bold text-[#131313] fair-dis mb-4">
              {bookName}
            </h2>
            <p className="text-[16px] font-medium text-[#131313CC] mb-4">
              By: {author}
            </p>
            <hr />
            <div className="card-actions justify-end">
              <p className="text-[16px] font-medium text-[#131313CC]">
                {category}
              </p>
              <p className="text-[16px] font-medium text-[#131313CC] flex gap-2 items-center">
                {rating} <FiStar className="text-xl" />
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Book;
