import React from "react";

const news = [
  {
    id: 1,
    type: "new_arrival",
    title: "New Arrivals",
    book_name: "The Silent Patient",
  },
  {
    id: 2,
    type: "new_arrival",
    title: "New Arrivals",
    book_name: "Atomic Habits",
  },
  {
    id: 3,
    type: "new_arrival",
    title: "New Arrivals",
    book_name: "Rich Dad Poor Dad",
  },
  {
    id: 4,
    type: "offer",
    title: "Special Discount",
    description: "Special Discount on Memberships",
  },
  {
    id: 5,
    type: "offer",
    title: "Limited Offer",
    description: "Get 20% Off on Premium Plan",
  },
];

const Marquee = () => {
  return (
    <div className="flex items-center gap-4 p-5">
      <button className="btn bg-red-500 text-white">Latest News</button>

      <marquee behavior="scroll" direction="left" scrollamount="5">
        {news.map((n) => (
          <span key={n.id} className="mr-10">
            {n.title}{" "}
            {n.type === "new_arrival" ? n.book_name : n.description}
          </span>
        ))}
      </marquee>
    </div>
  );
};

export default Marquee;