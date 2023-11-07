import { useLoaderData } from "react-router-dom";
import ThrillerCard from "./ThrillerCard";

const Thriller = () => {
  const thrillerData = useLoaderData();
  return (
    <div className="w-[1140px] mx-auto mt-16">
      <div className="grid grid-cols-3">
        {thrillerData
          .filter((thriller) => thriller.bookCategory === "thriler")
          .map((thriller) => (
            <ThrillerCard key={thriller._id} thriller={thriller}></ThrillerCard>
          ))}
      </div>
    </div>
  );
};

export default Thriller; 