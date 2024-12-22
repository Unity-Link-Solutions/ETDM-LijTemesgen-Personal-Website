import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection-Journey ";
import TimelineSection from "../../components/AboutSection/TimelineSection";
import PhotoGallery from "../../components/Gallery/Gallary";
import CallToAction from "../../components/CallToAction/CallToAction-Gallery";
import FloatingArrow from "../../components/FloatingArrow/FloatingArrow";

const Journey: React.FC = () => {
  return (
    <section>
      <HeroSection />
      <TimelineSection />
      <PhotoGallery />
      <CallToAction />
      <FloatingArrow />
    </section>
  );
};

export default Journey;
