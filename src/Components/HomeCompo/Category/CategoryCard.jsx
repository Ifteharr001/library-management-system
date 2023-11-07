import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CategoryCard = ({categorys}) => {
    // eslint-disable-next-line react/prop-types, no-unused-vars
    const { category, img} = categorys;
    return (
      <div className="card rounded-xl h-[350px] bg-base-100 shadow-xl image-full">
        <figure>
          <img className="object-cover w-full" src={img} alt="book" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{category}</h2>
          <div className="card-actions">
           <Link to={`/book/${category}`}>
             <button className="btn rounded-full  bg-gradient-to-r from-[#3873b6] to-[#5d9ee2] border-none text-white font-bold">
              see all book
            </button>
           </Link>
          </div>
        </div>
      </div>
    );
};

export default CategoryCard;