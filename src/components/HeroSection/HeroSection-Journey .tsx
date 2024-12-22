import React from "react";
import Breadcrumb from "../BreadCrumb Navigation/BradCrumb";

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-african-pattern-2 bg-cover bg-center pt-48 pb-20 lg:pt-48 lg:pb-32">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        {/* Hero Title */}
        <h1 className="text-5xl font-bold text-red-500">
          The Journey of Lij Temesgen
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg text-gray-300">
          Celebrating the life, art, and legacy of an Ethiopian cultural icon.
        </p>

        {/* Breadcrumb Navigation */}
        <Breadcrumb
          items={[{ name: "Home", link: "/" }, { name: "Journey" }]}
        />
      </div>
    </div>
  );
};

export default HeroSection;
