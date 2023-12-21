import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const [category, setCategory] = useState();
  useEffect(() => {
    fetch("https://library-management-system-server-steel.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <div className="mt-16 lg:w-[1140px] mx-auto">
      <h2 className="text-center font-bold dark:text-white text-5xl">
        <span className="bg-gradient-to-r from-[#3873b6]  to-[#5d9ee2] inline-block text-transparent bg-clip-text">
          Best Book
        </span>{" "}
        Category
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-14">
        {category?.map((categorys) => (
          <CategoryCard
            key={categorys?._id}
            categorys={categorys}
          ></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
