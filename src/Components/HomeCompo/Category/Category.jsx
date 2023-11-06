import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";


const Category = () => {
    const [category, setCategory] = useState()
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    }, [])
    return (
      <div className="mt-16">
        <h2 className="text-center font-bold text-4xl">
          <span className="bg-gradient-to-r from-[#3873b6]  to-[#5d9ee2] inline-block text-transparent bg-clip-text">
            Best Book
          </span>{" "}
          Category
        </h2>

        <div>
            {
               category?.map(categorys => <CategoryCard key={categorys?._id}
                categorys={categorys}
               ></CategoryCard>)
            }
        </div>
      </div>
    );
};

export default Category;