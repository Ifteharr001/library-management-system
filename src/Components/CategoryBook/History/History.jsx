import { useLoaderData } from "react-router-dom";
import HistoryCard from "./HistoryCard";

const History = () => {
  const historyData = useLoaderData();
  return (
    <div className="w-[1140px] mx-auto mt-16">
      <div className="grid grid-cols-3">
        {historyData
          .filter((history) => history.bookCategory === "history")
          .map((history) => (
            <HistoryCard key={history._id} history={history}></HistoryCard>
          ))}
      </div>
    </div>
  );
};

export default History;
