import React from "react";

const EVENTS_URL = "https://example-event-website.com"; // Replace with the actual event listing URL

const EventsHeroSection: React.FC = () => {
  return (
    <section className="relative bg-african-pattern-2 w-full min-h-[80vh] flex items-center justify-center bg-cover bg-center px-4 sm:px-8">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl w-full">
        <h2 className="text-sm sm:text-base md:text-lg text-gray-300 uppercase tracking-widest font-light mb-2">
          Explore Exciting Events
        </h2>
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
          Discover & Attend{" "}
          <span className="text-red-500">Upcoming Events</span>
        </h1>
        <p className="text-sm sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 px-2 sm:px-0">
          Stay connected with the latest happenings, workshops, and cultural
          events around you.
        </p>
        <a
          href={EVENTS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg transition inline-block text-sm sm:text-base"
        >
          Browse Events
        </a>
      </div>
    </section>
  );
};

export default EventsHeroSection;
