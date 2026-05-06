"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function BookSlider() {
  const books = [
    {
      id: 1,
      title: "The Silent Patient",
      image: "https://i.ibb.co/placeholder1.jpg",
    },
    {
      id: 2,
      title: "Atomic Habits",
      image: "https://i.ibb.co/placeholder2.jpg",
    },
    {
      id: 3,
      title: "Deep Work",
      image: "https://i.ibb.co/placeholder3.jpg",
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-5">📚 Featured Books</h2>

      <Swiper spaceBetween={20} slidesPerView={1}>
        {books.map((book) => (
          <SwiperSlide key={book.id}>
            <div className="border rounded-xl p-4 text-center shadow-md">
              
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-60 object-cover rounded-lg"
              />

              <h3 className="text-lg font-semibold mt-3">
                {book.title}
              </h3>

              <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded">
                View Details
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}