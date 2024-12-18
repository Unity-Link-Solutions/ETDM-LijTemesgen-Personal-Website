import React from "react";

const Gallery: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img
            src="https://via.placeholder.com/400x300?text=Gallery+Image+1"
            alt="Gallery 1"
            className="rounded-lg shadow-md hover:scale-105 transition transform duration-300"
          />
          <img
            src="https://via.placeholder.com/400x300?text=Gallery+Image+2"
            alt="Gallery 2"
            className="rounded-lg shadow-md hover:scale-105 transition transform duration-300"
          />
          <img
            src="https://via.placeholder.com/400x300?text=Gallery+Image+3"
            alt="Gallery 3"
            className="rounded-lg shadow-md hover:scale-105 transition transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
