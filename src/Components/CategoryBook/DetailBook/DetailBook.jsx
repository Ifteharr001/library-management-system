import { Link, useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
const DetailBook = () => {
  const bookDetail = useLoaderData();
  const {
    image,
    authorName,
    name,
    bookCategory,
    quantity,
    rating,
    description,
  } = bookDetail;
  return (
    <div className="grid grid-cols-3 gap-6 w-[1140px] mx-auto mt-16">
      <div className=" col-span-2 border-8 rounded-2xl border-[#3873b6]">
        <div className="card card-compact rounded-none w-full bg-[#7474742f] shadow-xl">
          <figure>
            <img className="h-[400px] mt-8" src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-3xl bg-gradient-to-r from-[#3873b6]  to-[#5d9ee2] inline-block text-transparent bg-clip-text">
              {name}
            </h2>
            <p className="text-xl ">{description}</p>
            <Link
              to="/readMore"
              className="bg-gradient-to-r from-[#3873b6]  to-[#5d9ee2] inline-block text-transparent bg-clip-text text-xl font-bold underline border-b-2"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
      <div className="border-8 border-[#3873b6] rounded-2xl bg-[#7474742f]  col-span-1">
        <div className="card card-compact rounded-none w-full  h-full">
          <div className="card-body">
            <div className="">
              <h2 className="card-title font-bold pb-8 text-3xl bg-gradient-to-r from-[#3873b6]  to-[#5d9ee2] inline-block text-transparent bg-clip-text">
                Author: {authorName}
              </h2>
              <p className="text-xl pt-4 font-bold border-b-2 pb-4 border-[#709cce]">
                Category: {bookCategory}
              </p>
              <p className="text-xl pt-4 font-bold border-b-2 pb-4 border-[#709cce]">
                Available Quantity: {quantity}
              </p>
              <p className="pt-4">
                {" "}
                <ReactStars count={5} size={30} value={rating} name="rating" />
              </p>
            </div>
          </div>
          <button className="btn bg-gradient-to-r from-[#3873b6] to-[#5d9ee2] border-none text-white font-bold justify-items-end my-8 mx-4">
            Borrow
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailBook;
