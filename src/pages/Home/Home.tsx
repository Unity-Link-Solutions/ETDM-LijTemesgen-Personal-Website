import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import AboutSection from "../../components/AboutSection/AboutSection";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";
import RecentWorks from "../../components/RecentPerformances/RecentPerformances";
import TestimonialsSection from "../../components/Testimonials/Testimonials";
// import Gallery from "../../components/Gallery/Gallary";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <RecentWorks />
      <TestimonialsSection />
      <MusicPlayer />
      {/* <Gallery /> */}
    </>
  );
};

export default Home;
