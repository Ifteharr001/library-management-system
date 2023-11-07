import { useLoaderData } from "react-router-dom";
import NovalCard from "./NovalCard";

const Noval = () => {
    const novelData = useLoaderData();
    return(
       <div className="w-[1140px] mx-auto">
         <div className="grid grid-cols-3">
          {novelData
            .filter((novel) => novel.bookCategory === "novel")
            .map((novel) => (
              <NovalCard key={novel._id} novel={novel}></NovalCard>
            ))}
        </div>

       </div>
    );
};

export default Noval;