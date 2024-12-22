import React from "react";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection2";
import ProductCard from "../../components/ProductCard/ProductCardTwo";
import PatternDivider from "../../components/PatternDriver/PatternDriver1";
import CallToAction from "../../components/CallToAction/CallToAction";

import merchImage1 from "../../assets/images/Merchandise/merch1.jpg";
import merchImage2 from "../../assets/images/Merchandise/merch1.jpg";
import merchImage3 from "../../assets/images/Merchandise/merch1.jpg";
import merchImage4 from "../../assets/images/Merchandise/merch1.jpg";

const merchandise = [
  {
    name: "Traditional Ethiopian Scarf",
    description: "Handwoven with intricate cultural patterns.",
    price: "$45",
    image: merchImage1,
    link: "/merchandise/scarf",
  },
  {
    name: "Embroidered Hat",
    description: "Showcasing traditional Ethiopian designs.",
    price: "$30",
    image: merchImage2,
    link: "/merchandise/hat",
  },
  {
    name: "Cultural Jewelry Set",
    description: "A stunning necklace and earring set.",
    price: "$75",
    image: merchImage3,
    link: "/merchandise/jewelry",
  },
  {
    name: "Ethiopian Coffee Set",
    description: "Authentic set for a traditional coffee ceremony.",
    price: "$90",
    image: merchImage4,
    link: "/merchandise/coffee-set",
  },
];

const ShopPage: React.FC = () => {
  return (
    <div className="bg-[#121212]">
      <Header />
      <HeroSection />

      {/* Product Grid */}
      <div className="container mx-auto px-6 lg:px-20 py-16">
        <h2 className="text-3xl text-red-500 font-bold text-center mb-10">
          Browse Our Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {merchandise.map((item, index) => (
            <ProductCard key={index} {...item} />
          ))}
        </div>
      </div>

      <PatternDivider />
      <CallToAction />
    </div>
  );
};

export default ShopPage;
