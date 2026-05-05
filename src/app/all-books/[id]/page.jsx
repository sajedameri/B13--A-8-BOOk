import Image from 'next/image';
import React from 'react';

const BookDetailsPage = async ({params}) => {
  const {id} =await params;
 const res = await fetch('https://b13-a-8-bo-ok.vercel.app/data.json')
  const books =await res.json();
 const book =books.find(b=>b.id ==id);
 console.log(book)
  return (
    <div className=" flex justify-center my-15 border rounded-2xl container mx-auto gap-5  ">
      
      <div className=' m-10'>
        <h2 className='text-4xl font-bolt my-10'>Books Details </h2>
         <Image
        src={book.image_url}
     width={500}
     height={500}
      
        
        alt={book.title}
        className="rounded-xl object-cover"
        />
    </div>
     <div className='mt-35'>
         <h2 className='text-2xl font-bole my-2'>Name: {book?.title}</h2>
      <h2 className='text-2xl font-bole my-2'>Author: {book?.author}</h2>
      <h2 className='text-2xl font-bole my-2'>Description: {book?.description}</h2>
      <h2 className='text-2xl font-bole my-2'>Available Quantity: {book?.available_quantity}</h2>
    <button className='btn bg-blue-300 py-6 px-50 rounded-3xl text-2xl'>Borrow This Book</button>

     </div>
      

    </div>
  );
};

export default BookDetailsPage;