import React from 'react';

const CategoryFilter = async() => {
    const res = await fetch('https://b13-a-8-bo-ok.vercel.app/category.json');
  const categorys =await res.json()
  console.log(categorys)
  
  return (
    <div>
      <h2 className='text-xl font-bold'>All Category</h2>
     {
      categorys.map(category=><li key={category.id}>{id.category}</li>)
     }
    </div>
  );
};

export default CategoryFilter;
