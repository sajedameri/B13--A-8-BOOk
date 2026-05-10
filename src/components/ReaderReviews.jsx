import React from "react";

const ReaderReviews = () => {
  const reviews = [
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
  ];

  return (
    <section className="py-16 bg-base-200 px-6">
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-4xl font-bold text-center mb-3">
          What Readers Say
        </h2>

        <p className="text-center text-gray-500 mb-12">
          Reviews from our happy readers
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {reviews.map((user, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              
              <div className="flex items-center gap-4 mb-4">
                
                <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                  {user.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    {user.name}
                  </h3>

                  <p className="text-yellow-500">
                    ★★★★★
                  </p>
                </div>
              </div>

              
              <p className="text-gray-600 leading-relaxed">
                {user.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReaderReviews;