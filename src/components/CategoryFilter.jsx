import React from 'react';

const CategoryFilter = async() => {
    const res = await fetch('https://b13-a-8-bo-ok.vercel.app/category.json');
  const category =await res.json()
  console.log(category)
  
  return (
    <div>
      
    </div>
  );
};

export default CategoryFilter;
