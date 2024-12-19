import React from "react";
import heroImage from "../../assets/images/hero.jpg";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center-20"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white px-6 lg:px-12">
        {/* Text Content */}
        <h2 className="text-lg text-gray-300 mb-2 font-light uppercase tracking-widest">
          June 4, 2024
        </h2>
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-center">
          Explore the <span className="text-red-500">ETDM</span> Experience
        </h1>
        <button className="bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg transition">
          Read More
        </button>
      </div>

      {/* Left Arrow */}
      <button className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center bg-black bg-opacity-50 hover:bg-red-600 text-white transition">
        &#8592;
      </button>

      {/* Right Arrow */}
      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center bg-black bg-opacity-50 hover:bg-red-600 text-white transition">
        &#8594;
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === 0 ? "bg-red-500" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
