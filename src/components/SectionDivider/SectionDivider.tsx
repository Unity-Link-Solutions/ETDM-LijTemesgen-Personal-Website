import React from "react";
import patternImage from "../../assets/images/pattern.jpg"; // Replace with the uploaded pattern image path

const SectionDivider: React.FC = () => {
  return (
    <div
      className="w-full h-16 lg:h-24 bg-cover bg-center"
      style={{
        backgroundImage: `url(${patternImage})`,
      }}
    >
      {/* Optional: Add subtle animation or effects */}
    </div>
  );
};

export default SectionDivider;
