import React from "react";

const Gallery: React.FC = () => {
  return (
    <section className="py-12 bg-white text-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-6">Gallery</h1>
        <p className="text-gray-700 mb-8">
          Explore stunning visuals of performances, behind-the-scenes moments,
          and cultural expressions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img
            src="https://via.placeholder.com/400x300?text=Performance+1"
            alt="Performance 1"
            className="rounded-lg shadow-md hover:scale-105 transition duration-300"
          />
          <img
            src="https://via.placeholder.com/400x300?text=Performance+2"
            alt="Performance 2"
            className="rounded-lg shadow-md hover:scale-105 transition duration-300"
          />
          <img
            src="https://via.placeholder.com/400x300?text=Behind+the+Scenes"
            alt="Behind the Scenes"
            className="rounded-lg shadow-md hover:scale-105 transition duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
