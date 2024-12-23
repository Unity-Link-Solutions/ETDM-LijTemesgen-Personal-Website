import React from "react";

const Music: React.FC = () => {
  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-6">Music Library</h1>
        <p className="text-gray-300 mb-8">
          Listen to featured tracks and albums that bring Ethiopian Traditional
          Dance Music to life.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <iframe
            src="https://open.spotify.com/embed/track/1"
            className="w-full h-48 rounded-lg"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            className="w-full h-48 rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <iframe
            src="https://open.spotify.com/embed/track/2"
            className="w-full h-48 rounded-lg"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Music;
