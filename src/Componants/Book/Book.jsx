import React from "react";

const Book = ({ book }) => {
  const { tags, category, rating, author, bookName, image } = book;
  return (
    <div>
      {/* =================== Card =========================== */}

      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="" />
        </figure>
        <div className="card-body sans">
          <div>
            {tags.map((tag) => (
              <span className="text-[16px] font-medium t-primary mr-3  bg-[#23BE0A0D] px-4 py-2 cursor-pointer rounded-lg">
                {tag}
              </span>
            ))}
          </div>
          <h2 className=" text-2xl font-bold text-[#131313] fair-dis">
            {bookName}
          </h2>
          <p className="text-[16px] font-medium text-[#131313CC]">
            By: {author}
          </p>
          <hr />
          <div className="card-actions justify-end">
            <p className="text-[16px] font-medium text-[#131313CC]">
              {category}
            </p>
            <p className="text-[16px] font-medium text-[#131313CC]">{rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
