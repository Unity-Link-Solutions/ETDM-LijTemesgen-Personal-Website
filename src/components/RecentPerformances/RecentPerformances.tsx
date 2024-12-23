import React, { useState } from "react";
import { Link } from "react-router-dom";
import work1Image from "../../assets/images/Adwa/photo_12_2024-12-18_20-43-28.jpg";
import work2Image from "../../assets/images/Adwa/photo_10_2024-12-18_20-43-28.jpg";
import work3Image from "../../assets/images/Adwa/photo_11_2024-12-18_20-43-28.jpg";
import work4Image from "../../assets/images/Adwa/photo_5_2024-12-18_20-43-28.jpg";

const recentPerformances = [
  {
    title: "Adwa Performance",
    image: work1Image,
    description: "A powerful portrayal of Ethiopian victory.",
    link: "/performances/adwa",
  },
  {
    title: "Collaboration with Rophnan",
    image: work2Image,
    description: "A groundbreaking fusion of Ethiopian beats and dance.",
    link: "/performances/rophnan",
  },
  {
    title: "Cultural Dance Workshop",
    image: work3Image,
    description:
      "Teaching traditional Ethiopian dances to the next generation.",
    link: "/performances/workshop",
  },
  {
    title: "The Ethiopian Odyssey",
    image: work4Image,
    description: "A mesmerizing story told through dance and music.",
    link: "/performances/odyssey",
  },
];

const RecentPerformances: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % recentPerformances.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + recentPerformances.length) % recentPerformances.length
    );
  };

  // useEffect(() => {
  //   const interval = setInterval(nextSlide, 100000); // Auto-slide every 10 seconds
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <section className="w-full py-16 bg-[#121212] text-white relative">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-pattern opacity-10"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col items-center mb-12">
          <div className="w-32 h-2 bg-red-500 mb-4"></div>
          <h2 className="text-4xl lg:text-5xl font-bold text-red-500 text-center">
            Recent Performances
          </h2>
          <div className="w-32 h-2 bg-red-500 mt-4"></div>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {recentPerformances.map((performance, index) => (
              <div
                key={index}
                className="flex-none w-full px-4 sm:w-2/3 md:w-1/3 lg:w-1/4"
              >
                <div className="relative group rounded-lg overflow-hidden shadow-lg border border-[#1F1E18] hover:border-red-500 transition-all duration-500">
                  {/* Performance Image */}
                  <div className="relative">
                    <img
                      src={performance.image}
                      alt={performance.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:filter-none grayscale"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-xl font-bold text-red-500 mb-2">
                      {performance.title}
                    </h3>
                    <p className="text-gray-300 text-center px-4">
                      {performance.description}
                    </p>
                    <Link
                      to={performance.link}
                      className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={prevSlide}
            className="bg-[#1F1E18] hover:bg-red-500 text-white py-3 px-6 rounded-lg shadow-md transition focus:outline-none animate-pulse"
          >
            &#8592; Previous
          </button>
          <button
            onClick={nextSlide}
            className="bg-[#1F1E18] hover:bg-red-500 text-white py-3 px-6 rounded-lg shadow-md transition focus:outline-none animate-pulse"
          >
            Next &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentPerformances;
