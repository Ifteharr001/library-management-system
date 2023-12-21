import { useLoaderData } from "react-router-dom";
import ThrillerCard from "./ThrillerCard";

const Thriller = () => {
  const thrillerData = useLoaderData();
  return (
    <div className="dark:bg-gray-800 dark:text-white">
      <div className="lg:w-[1140px] mx-auto pt-16">
        <h2 className="font-bold text-3xl bg-gradient-to-r from-[#3873b6]  to-[#5d9ee2] py-8 text-transparent bg-clip-text text-center justify-center items-center">
          Thriller
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {thrillerData
            .filter((thriller) => thriller.bookCategory === "thriler")
            .map((thriller) => (
              <ThrillerCard
                key={thriller._id}
                thriller={thriller}
              ></ThrillerCard>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Thriller; 