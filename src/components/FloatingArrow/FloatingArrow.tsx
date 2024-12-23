import React, { useState, useEffect } from "react";

const FloatingArrow: React.FC = () => {
  const [showUpArrow, setShowUpArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowUpArrow(window.scrollY > 300); // Show up arrow after 300px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToNextSection = () => {
    const nextSection = document.querySelector("#timeline-section");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Down Arrow (visible at the start of the page) */}
      {!showUpArrow && (
        <div
          className="hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer bg-red-500 p-3 rounded-full shadow-lg hover:bg-red-600 transition duration-300"
          onClick={scrollToNextSection}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      )}

      {/* Up Arrow (visible after scrolling down) */}
      {showUpArrow && (
        <div
          className="fixed bottom-6 right-6 z-50 cursor-pointer bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
          onClick={scrollToTop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </div>
      )}
    </>
  );
};

export default FloatingArrow;
