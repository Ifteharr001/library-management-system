import { useLoaderData } from "react-router-dom";
import AllBookCard from "./AllBookCard";

const AllBook = () => {
    const allBook = useLoaderData()
    return (
        <div className="w-[1140px] mx-auto grid grid-cols-3 gap-6">
            {
                allBook.map((book) => <AllBookCard key={book._id} book={book}></AllBookCard>)
            }
        </div>
    );
};

export default AllBook;