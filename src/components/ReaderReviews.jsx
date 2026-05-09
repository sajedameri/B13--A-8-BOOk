import React from 'react';

const ReaderReviews = () => {
  return (
    <div>
      <section className="py-16 bg-base-200 px-6">
  <h2 className="text-3xl font-bold text-center mb-10">
    What Readers Say
  </h2>

  <div className="grid md:grid-cols-3 gap-8">
    {[
      {
        name: "Ayesha",
        review: "Amazing collection of books. Easy to borrow!",
      },
      {
        name: "Rahim",
        review: "The best online library experience I've had.",
      },
      {
        name: "Nusrat",
        review: "Beautiful UI and very helpful recommendations.",
      },
    ].map((user, index) => (
      <div
        key={index}
        className="bg-white p-6 rounded-2xl shadow-lg"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
            {user.name[0]}
          </div>

          <div>
            <h3 className="font-semibold">{user.name}</h3>
            <p className="text-yellow-500">★★★★★</p>
          </div>
        </div>

        <p className="text-gray-600">{user.review}</p>
      </div>
    ))}
  </div>
</section>
    </div>
  );
};

export default ReaderReviews;