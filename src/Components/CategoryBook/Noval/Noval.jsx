import { useLoaderData } from "react-router-dom";
import NovalCard from "./NovalCard";

const Noval = () => {
    const novelData = useLoaderData();
    return (
      <div className="dark:bg-gray-800 dark:text-white">
        <div className="lg:w-[1140px] mx-auto">
          <h2 className="font-bold text-3xl bg-gradient-to-r from-[#3873b6]  to-[#5d9ee2] py-8 text-transparent bg-clip-text text-center justify-center items-center">
            Novel
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {novelData
              .filter((novel) => novel.bookCategory === "novel")
              .map((novel) => (
                <NovalCard key={novel._id} novel={novel}></NovalCard>
              ))}
          </div>
        </div>
      </div>
    );
};

export default Noval;