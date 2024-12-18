import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import AboutSection from "../../components/AboutSection/AboutSection";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";
import Gallery from "../../components/Gallery/Gallary";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection
        title="About the Artist"
        description="Blending Ethiopian culture with modern beats, this artist brings the soul of ETDM to the world."
      />
      <MusicPlayer />
      <Gallery />
    </>
  );
};

export default Home;
