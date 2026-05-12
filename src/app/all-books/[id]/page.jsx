import Image from "next/image";
import React from "react";

const BookDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("https://marybookhouse.vercel.app/data.json");
  const books = await res.json();

  const book = books.find((b) => b.id == id);

  return (
    <div className="max-w-6xl mx-auto my-10 px-4">
      <div className="border rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-10">
        {/* Left Side */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Book Details</h2>

          <Image
            src={book.image_url}
            width={300}
            height={300}
            alt={book.title}
            className="rounded-xl object-cover w-full max-w-[300px]"
          />
        </div>

        {/* Right Side */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-xl md:text-2xl font-bold my-2">
            Name: {book?.title}
          </h2>

          <h2 className="text-xl md:text-2xl font-bold my-2">
            Author: {book?.author}
          </h2>

          <p className="text-base md:text-lg my-3 leading-7">
            <span className="font-bold">Description:</span> {book?.description}
          </p>

          <h2 className="text-xl md:text-2xl font-bold my-2">
            Available Quantity: {book?.available_quantity}
          </h2>

          <button className="btn bg-blue-300 hover:bg-blue-400 text-black text-lg md:text-xl py-3 px-6 rounded-2xl mt-6 w-full md:w-fit">
            Borrow This Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
