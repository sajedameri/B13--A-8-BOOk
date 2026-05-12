import Link from "next/link";
import React from "react";

const CategoryFilter = async () => {
  const res = await fetch("https://marybookhouse.vercel.app/category.json",{cache:"no-store"});
  const categories = (await res.json())||[];
  console.log(categories);

  return (
    <div>
      <h2 className="text-xl font-bold my-6">All Category</h2>
     <div className="sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
       {categories?.map((category) => <Link  key={category.id} href={`?category=${category?.category?.toLowerCase()}`}>

        <button
          className="bg-amber-50 p-5 rounded-md font-bold text-accent text-xl w-full my-5"
         >
        {category.category}
       
         
          
        </button>
        </Link>
      
      )}
     </div>
    </div>
  );
};

export default CategoryFilter;
