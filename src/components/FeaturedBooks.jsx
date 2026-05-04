import React from 'react';
import BookCard from './BookCard';

const FeaturedBooks = async() => {
  const res = await fetch('https://b13-a-8-bo-ok.vercel.app/data.json')
  const books =await res.json();
 const topBooks=books.slice(0, 4);

  return (
    <div>
     <h2 className='text-2xl font-bold my-8'>
      Featured Books: 
      </h2>
      <div>
       {topBooks.map(book=><BookCard key={book.id}book={book} />)}
        

     
        </div> 
    </div>
  );
};

export default FeaturedBooks;
