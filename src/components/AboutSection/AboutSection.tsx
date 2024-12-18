import React from "react";
import Porterate from "../../assets/images/portraite.jpg";

interface AboutSectionProps {
  title: string;
  description: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ title, description }) => {
  return (
    <section className="py-16 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-6 md:flex md:items-center">
        {/* Text Content */}
        <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{title}</h1>
          <p className="text-gray-700 leading-relaxed text-lg">{description}</p>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <div className="relative group">
            <img
              src={Porterate}
              alt="About the Artist"
              className="rounded-lg shadow-lg border-4 border-transparent group-hover:border-red-600 transition duration-300 mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
