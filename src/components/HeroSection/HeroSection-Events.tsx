import React from "react";

const EVENTS_URL = "https://example-event-website.com"; // Replace with the actual event listing URL

const EventsHeroSection: React.FC = () => {
  return (
    <section className="relative bg-african-pattern-2 w-full h-[80vh] flex items-center justify-center bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 lg:px-12">
        <h2 className="text-lg text-gray-300 uppercase tracking-widest font-light mb-2">
          Explore Exciting Events
        </h2>
        <h1 className="text-5xl lg:text-7xl font-bold mb-6">
          Discover & Attend{" "}
          <span className="text-red-500">Upcoming Events</span>
        </h1>
        <p className="text-lg lg:text-xl text-gray-300 mb-8">
          Stay connected with the latest happenings, workshops, and cultural
          events around you.
        </p>
        <a
          href={EVENTS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg transition inline-block"
        >
          Browse Events
        </a>
      </div>
    </section>
  );
};

export default EventsHeroSection;
