"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function BookSlider() {
  const books = [
    {
      id: 1,
      title: "The Silent Patient",
      image: "https://i.ibb.co/RG9ndbq8/Ill-Hist-Space-cover1-Amber-thumb.jpg",
    },
    {
      id: 2,
      title: "Atomic Habits",
      image: "https://i.ibb.co/jvLCrBGM/Echoes-in-Time-ebook-cover-86ede335e1.jpg",
    },
    {
      id: 3,
      title: "Deep Work",
      image: "https://i.ibb.co/zYcJp86/61-ZN1lif-JWL-AC-UF1000-1000-QL80.jpg",
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-5">Featured Books</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
      >
        {books.map((book) => (
          <SwiperSlide key={book.id}>
            <div className="border rounded-xl p-4 text-center shadow-md">
              <img
                src={book.image}
               
                alt={book.title}
                className="w-100 h-100 object-cover rounded-lg items-center"
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