/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

// Import images using Vite's glob import
const allImages = import.meta.glob(
  "../../assets/images/gallery/all/*.{png,jpg,jpeg,svg}",
  { eager: true }
);
const adwaImages = import.meta.glob(
  "../../assets/images/gallery/adwa/*.{png,jpg,jpeg,svg}",
  { eager: true }
);
const concertsImages = import.meta.glob(
  "../../assets/images/gallery/concerts/*.{png,jpg,jpeg,svg}",
  { eager: true }
);

// Format images into usable objects
const formatImages = (images: Record<string, unknown>) =>
  Object.entries(images).map(([, value]: [string, any]) => ({
    src: value.default, // Resolved URL
  }));

const PhotoGallery: React.FC = () => {
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6); // Initially show 6 images
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // For full-screen modal
  const [isZoomed, setIsZoomed] = useState(false); // Track zoom state
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  // Format images for each category
  const allFormattedImages = formatImages(allImages);
  const adwaFormattedImages = formatImages(adwaImages);
  const concertsFormattedImages = formatImages(concertsImages);

  // Determine images to display based on filter
  const allFilteredImages =
    filter === "All"
      ? [
          ...allFormattedImages,
          ...adwaFormattedImages,
          ...concertsFormattedImages,
        ]
      : filter === "Adwa"
      ? adwaFormattedImages
      : filter === "Concerts"
      ? concertsFormattedImages
      : [];

  const visibleImages = allFilteredImages.slice(0, visibleCount);

  // Load More Functionality
  const handleLoadMore = () => {
    setIsLoading(true); // Start loading
    setTimeout(() => {
      setVisibleCount((prev) =>
        prev + 6 > allFilteredImages.length
          ? allFilteredImages.length
          : prev + 6
      );
      setIsLoading(false); // Stop loading
    }, 1000); // Simulate a delay
  };

  // Show Less Functionality
  const handleShowLess = () => {
    setVisibleCount(6); // Collapse back to initial state
  };

  return (
    <div className="py-16 bg-[#1F1E18] text-white">
      {/* Page Header */}
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-red-500 mb-8 text-center tracking-wide">
          Photo Gallery
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Explore Ethiopia's vibrant culture and heritage through the lens of
          Lij Temesgen's works.
        </p>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          {["All", "Adwa", "Concerts"].map((category) => (
            <button
              key={category}
              onClick={() => {
                setFilter(category);
                setVisibleCount(6); // Reset visible images when changing filter
              }}
              className={`py-2 px-4 rounded-lg text-lg font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-red-500 text-white shadow-lg"
                  : "bg-gray-700 hover:bg-gray-600 text-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="flex flex-wrap gap-4 justify-center">
          {visibleImages.map((item, index) => (
            <div
              key={index}
              className={`overflow-hidden shadow-lg cursor-pointer group relative transition-all duration-500 ease-in-out ${
                index >= visibleCount - 6 ? "opacity-0 animate-fadeIn" : ""
              }`}
              style={{ height: "250px", flex: "1 1 auto" }} // Fixed height, free width
              onClick={() => {
                setSelectedImage(item.src);
                setIsZoomed(false); // Reset zoom on open
              }}
            >
              <img
                src={item.src}
                alt=""
                className="w-full h-full object-cover transition-all duration-200 ease-in-out grayscale group-hover:grayscale-0 group-hover:border-4 group-hover:border-red-600"
              />
            </div>
          ))}
        </div>

        {/* Load More and Show Less Buttons */}
        <div className="mt-8 text-center flex justify-center">
          {isLoading ? (
            <button
              disabled
              className="bg-red-500 text-white py-2 px-6 rounded-lg text-lg font-medium transition-all duration-300 mx-2 flex items-center"
            >
              <svg
                className="animate-spin h-5 w-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 100 8H4z"
                ></path>
              </svg>
              Loading...
            </button>
          ) : visibleCount < allFilteredImages.length ? (
            <button
              onClick={handleLoadMore}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg text-lg font-medium transition-all duration-300 mx-2"
            >
              Load More
            </button>
          ) : (
            <button
              onClick={handleShowLess}
              className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-6 rounded-lg text-lg font-medium transition-all duration-300 mx-2"
            >
              Show Less
            </button>
          )}
        </div>

        {/* Full-Screen Modal with Zoom */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center"
            onClick={() => {
              setSelectedImage(null); // Close modal
              setIsZoomed(false); // Reset zoom on close
            }}
          >
            <div
              className={`relative transition-transform duration-300 ${
                isZoomed
                  ? "scale-150 cursor-zoom-out"
                  : "scale-100 cursor-zoom-in"
              }`}
              onClick={(e) => {
                e.stopPropagation(); // Prevent closing when clicking the image
                setIsZoomed((prev) => !prev); // Toggle zoom
              }}
            >
              <img
                src={selectedImage}
                alt=""
                className="rounded-lg shadow-lg"
                style={{
                  width: "auto",
                  height: "auto",
                  maxWidth: "90%",
                  maxHeight: "90%",
                  objectFit: "contain",
                  transition: "transform 0.3s",
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoGallery;
