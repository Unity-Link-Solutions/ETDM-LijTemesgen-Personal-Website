import React, { useState, useEffect } from "react";
import heroImage1 from "../../assets/images/PersonalPhoto/photoBlack1.jpg";
import heroImage2 from "../../assets/images/PersonalPhoto/photoBlack2.jpg";
import heroImage3 from "../../assets/images/PersonalPhoto/photoBlack3.jpg";

const slides = [
  {
    image: heroImage1,
    date: "June 4, 2024",
    title: (
      <>
        Explore the{" "}
        <span className="bg-gradient-to-r from-gray-500 to-red-500 bg-clip-text text-transparent animate-pulse">
          ETDM
        </span>{" "}
        Experience
      </>
    ),
  },
  {
    image: heroImage2,
    date: "July 10, 2024",
    title: (
      <>
        Discover New{" "}
        <span className="bg-gradient-to-r from-gray-500 to-red-500 bg-clip-text text-transparent animate-pulse">
          Horizons
        </span>{" "}
        . . .
      </>
    ),
  },
  {
    image: heroImage3,
    date: "July 10, 2024",
    title: (
      <>
        Discover New{" "}
        <span className="bg-gradient-to-r from-gray-500 to-red-500 bg-clip-text text-transparent animate-pulse">
          Horizons
        </span>{" "}
        . . .
      </>
    ),
  },
];

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 1000); // Match transition duration
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 1000); // Match transition duration
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 50000); // Auto-slide every 50 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <section className="relative w-full h-[93vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          ></div>
          {/* Overlay Content */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white px-6 lg:px-12">
            <h2 className="text-lg text-gray-300 mb-2 font-light uppercase tracking-widest">
              {slide.date}
            </h2>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-center">
              {slide.title}
            </h1>
            <button className="bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg transition">
              Read More
            </button>
          </div>
        </div>
      ))}

      {/* Left Navigation Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center bg-black bg-opacity-50 hover:bg-red-600 animate-pulse text-white transition focus:outline-none z-20"
        aria-label="Previous Slide"
      >
        &#8592;
      </button>

      {/* Right Navigation Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center bg-black bg-opacity-50 hover:bg-red-600 animate-pulse text-white transition focus:outline-none z-20"
        aria-label="Next Slide"
      >
        &#8594;
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => !isAnimating && setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
              currentSlide === index
                ? "bg-red-500 animate scale-125"
                : "bg-gray-400 hover:bg-red-500"
            }`}
            aria-label={`Slide ${index + 1}`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
