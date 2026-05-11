import BookCard from "@/components/BookCard";
import CategoryFilter from "@/components/CategoryFilter";
import SearchBar from "@/components/SearchBar";
import React from "react";


const AllBookspage = async ({ searchParams }) => {
  const { category } = await searchParams;
  console.log(category);
  const res = await fetch("https://b13-a-8-bo-ok.vercel.app/data.json");
  const books = await res.json();
  const filteredBooks = category
    ? books.filter(
        (book) => book.category.toLowerCase() == category.toLowerCase(),
      )
    : books;

  return (
    <div className="container mx-auto ">
      <h1 className="text-2xl font-bold py-5">All Books</h1>
      <SearchBar />

      <div className="grid md:grid-cols-12 gap-5  grid-col-1 ">
        <div className="md:col-span-4 ">
          <CategoryFilter />
        </div>
        <div className="grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 md:col-span-8 ">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
          ;
        </div>
     
      </div>
    </div>
  );
};

export default AllBookspage;
