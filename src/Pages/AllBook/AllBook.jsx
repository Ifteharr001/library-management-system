import { useLoaderData } from "react-router-dom";
import AllBookCard from "./AllBookCard";

const AllBook = () => {
    const allBook = useLoaderData()
    return (
      <div className=" dark:bg-gray-800 dark:text-white">
        <h2 className="text-4xl font-bold  text-center py-4">
          All{" "}
          <span className="bg-gradient-to-r from-[#3873b6]  to-[#5d9ee2]  text-transparent bg-clip-text">
            Book
          </span>
        </h2>
        <div className="lg:w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {allBook.map((book) => (
            <AllBookCard key={book._id} book={book}></AllBookCard>
          ))}
        </div>
      </div>
    );
};

export default AllBook;