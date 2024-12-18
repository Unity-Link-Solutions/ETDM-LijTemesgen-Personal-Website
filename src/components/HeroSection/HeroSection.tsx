import React from "react";
import heroImage from "../../assets/images/hero.jpg";

const HeroSection: React.FC = () => {
  return (
    // <section className="relative w-full h-screen flex items-center justify-center text-center bg-cover bg-center">
      <section className="relative w-full h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage:
          `url(${heroImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-8 lg:px-16 text-white">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-4">
          Discover the <span className="text-red-500">Sound of ETDM</span>
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          Where Ethiopian tradition meets modern rhythm. Experience the beat,
          the culture, and the dance.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#music"
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md transition duration-300"
          >
            Listen Now
          </a>
          <a
            href="#events"
            className="border border-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-md transition duration-300"
          >
            Explore Events
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
