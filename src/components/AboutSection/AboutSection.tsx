import React from "react";

interface AboutSectionProps {
  imageUrl: string;
  title: string;
  description: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <section className="py-12 bg-white text-gray-800">
      <div className="container mx-auto px-6 md:flex md:items-center">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-6">{title}</h1>
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src={imageUrl}
            alt="About the Artist"
            className="rounded-lg shadow-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
