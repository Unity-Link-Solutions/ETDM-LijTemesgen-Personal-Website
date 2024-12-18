import React, { useState } from "react";
import heroImage from "../../assets/images/hero.jpg";

const HeroSection: React.FC = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <section
      className="relative w-full h-screen flex text-white overflow-hidden"
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      {/* Left Side - Hero Image */}
      <div
        className="w-1/2 h-full bg-cover bg-center animate-fadeIn"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        {/* Left Navigation Button */}
        <button
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center bg-black bg-opacity-50 hover:bg-red-600 transition-all duration-300 ${
            isMouseOver ? "opacity-100" : "opacity-0"
          }`}
        >
          &#8592;
        </button>
      </div>

      {/* Right Side - Content */}
      <div className="w-1/2 h-full flex flex-col justify-center items-center bg-black">
        <div className="px-8 animate-slideIn">
          <h2 className="text-lg text-gray-400 mb-2 font-light uppercase tracking-widest">
            Some of my
          </h2>
          <h1
            className="text-5xl font-extrabold mb-8 text-white"
            style={{ fontFamily: "Montserrat" }}
          >
            Best <span className="text-red-500">Work</span>
          </h1>

          {/* Grid Content */}
          <div className="grid grid-cols-2 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg">
                <img
                  src={`https://via.placeholder.com/300x200?text=Work+${
                    index + 1
                  }`}
                  alt={`Work ${index + 1}`}
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110 hover:translate-x-2 hover:-translate-y-2"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Navigation Button */}
        <button
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center bg-black bg-opacity-50 hover:bg-red-600 transition-all duration-300 ${
            isMouseOver ? "opacity-100" : "opacity-0"
          }`}
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
