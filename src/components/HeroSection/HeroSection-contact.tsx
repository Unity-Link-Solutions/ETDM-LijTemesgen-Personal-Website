import React from "react";

const ContactHeroSection: React.FC = () => {
  return (
    <section className="relative bg-african-pattern-2 w-full h-[80vh] flex items-center justify-center bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 lg:px-12">
        <h2 className="text-lg text-gray-300 uppercase tracking-widest font-light mb-2">
          Get in Touch
        </h2>
        <h1 className="text-5xl lg:text-7xl font-bold mb-6">
          We’d Love to <span className="text-red-500">Hear from You</span>
        </h1>
        <p className="text-lg lg:text-xl text-gray-300 mb-8">
          Have questions or inquiries? Reach out to us, and we’ll be happy to
          assist you.
        </p>
      </div>
    </section>
  );
};

export default ContactHeroSection;
