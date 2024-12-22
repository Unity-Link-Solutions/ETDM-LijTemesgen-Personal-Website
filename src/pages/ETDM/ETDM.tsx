import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection2";
import IntroductionSection from "../../components/AboutSection/IntroETDM";
import TimelineSection from "../../components/ETDM/Milestone";
import MerchandiseSection from "../../components/ETDM/Merchandise";
import CallToActionSection from "../../components/CallToAction/CallToAction";

const ETDMPage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <IntroductionSection />
      <TimelineSection />
      <MerchandiseSection />
      <CallToActionSection />
    </div>
  );
};

export default ETDMPage;
