import { Link } from "react-router-dom";

// eslint-disable-next-line no-unused-vars, react/prop-types
const AllBookCard = ({ book }) => {
  // eslint-disable-next-line react/prop-types
  const { _id, image, authorName, name, bookCategory, rating } = book;
  return (
    <div>
      <div className="card h-[450px]   bg-base-100 shadow-xl border-4">
        <figure>
          <img
            className="object-cover h-[250px] mt-4 "
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body h-[200px]">
          <h2 className="card-title bg-gradient-to-r from-[#3873b6]  to-[#5d9ee2]  text-transparent bg-clip-text ">
            {" "}
            {name}{" "}
          </h2>
          <p className="font-bold border-b-2 pb-2">
            <span className="bg-gradient-to-r from-[#3873b6]  to-[#5d9ee2]  text-transparent bg-clip-text ">
              Author Name:
            </span>{" "}
            {authorName}
          </p>
          <p className="font-bold">
            <span className="bg-gradient-to-r from-[#3873b6]  to-[#5d9ee2]  text-transparent bg-clip-text ">
              Category:
            </span>{" "}
            {bookCategory}
          </p>
          <div className="flex items-center">
            <p>{rating}</p>
            <div className="card-actions">
              <Link
                className="btn bg-gradient-to-r from-[#3873b6] to-[#5d9ee2] border-none text-white rounded-full font-bold "
                to={`/updateBook/${_id}`}
              >
                update
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBookCard;
