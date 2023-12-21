import { useLoaderData } from "react-router-dom";
import HistoryCard from "./HistoryCard";

const History = () => {
  const historyData = useLoaderData();
  return (
    <div className="dark:bg-gray-800 dark:text-white">
      <div className="lg:w-[1140px] mx-auto pt-16 ">
      <h2  className="font-bold text-3xl bg-gradient-to-r from-[#3873b6]  to-[#5d9ee2] my-8 text-transparent bg-clip-text text-center justify-center items-center">
            
          
          History
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {historyData
            .filter((history) => history.bookCategory === "history")
            .map((history) => (
              <HistoryCard key={history._id} history={history}></HistoryCard>
            ))}
      </div>
    </div>
    </div>
  );
};

export default History;
