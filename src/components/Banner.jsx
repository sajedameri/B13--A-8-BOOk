import React from 'react';


const Banner = () => {
  return (
    <div>
      <div
 className="hero min-h-screen container mx-auto"
  style={{
    backgroundImage:
      "url('/pexels-rick98-2793466.jpg')",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Find Your Next Read</h1>
      
      <button className="btn btn-primary">Browse Now</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Banner;