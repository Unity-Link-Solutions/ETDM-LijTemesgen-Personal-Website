import React from "react";
import AboutSection from "../../components/AboutSection/AboutSection";

const About: React.FC = () => {
  return (
    <div>
      <AboutSection
        title="About the Artist"
        description="The artist brings Ethiopian Traditional Dance Music (ETDM) to life, merging cultural rhythms with modern beats. From humble beginnings to global stages, their work honors tradition while captivating new audiences worldwide."
        imageUrl="https://via.placeholder.com/600x400?text=Artist+Story"
      />
    </div>
  );
};

export default About;
