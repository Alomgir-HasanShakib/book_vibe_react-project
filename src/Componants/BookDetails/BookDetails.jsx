import { useLoaderData, useParams } from "react-router-dom";

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

  return (
    <div className="mt-16">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="p-16 bg-[#1313130D]">
          <img src={image} alt="Album" className="h-[564px]" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p>By: {author}</p>
          <hr />
          <p>{category}</p>
          <hr />
          <p>
            <span className="font-bold">Review:</span>
            {review}
          </p>
          <p>
            <span className="font-bold">Tag</span>{" "}
            {tags.map((tag, idx) => (
              <span key={idx}>#{tag}</span>
            ))}
          </p>
          <hr />
          <div>
            <p>Number of Pages : {totalPages}</p>
            <p>Publisher : {publisher}</p>
            <p>Year of Publishing: {yearOfPublishing}</p>
            <p>Rating: {rating}</p>
          </div>
          <div className="card-actions mt-6">
            <button className="btn bg-transparent border text-[18px] font-semibold px-7">
              Read
            </button>
            <button className="btn bg-[#50B1C9] hover:bg-transparent hover:border-[#50B1C9]">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
