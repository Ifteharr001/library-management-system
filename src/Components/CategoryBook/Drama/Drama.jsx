import { useLoaderData } from "react-router-dom";
import DramaCard from "./DramaCard";

const Drama = () => {
    const dramaData = useLoaderData()
    return (
      <div className="w-[1140px] mx-auto mt-16">
        <div className="grid grid-cols-3">
          {dramaData
            .filter((drama) => drama.bookCategory === "drama")
            .map((drama) => (
              <DramaCard key={drama._id} drama={drama}></DramaCard>
            ))}
        </div>
      </div>
    );
};

export default Drama;