import BookCard from '@/components/BookCard';
import CategoryFilter from '@/components/CategoryFilter';
import React from 'react';

const AllBookspage =async () => {
  const res = await fetch('https://b13-a-8-bo-ok.vercel.app/data.json');
  const books =await res.json()
  
  return (
    <div className='container mx-auto'>
     <h1 className='text-2xl font-bold py-5'>All Books</h1>
     < CategoryFilter/>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10 '>
       {books.map(book=><BookCard key={book.id}book={book} />)}
      </div> 
    </div>
  );
};

export default AllBookspage;
