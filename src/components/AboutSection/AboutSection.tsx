import React from "react";
import portraitImage from "../../assets/images/PersonalPhoto/portraite.jpg";

const AboutSection: React.FC = () => {
  return (
    <section className="w-full  bg-[#1F1E18] text-white">
      {/* <div className="w-full h-24 bg-african-pattern opacity-80 brightness-95"></div> */}
      <div className="w-full h-12 bg-african-pattern-1 brightness-95 transition-opacity duration-500 hover:opacity-100 opacity-80 animate-pulse"></div>

      <div className="container py-16 mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12 bg-african-pattern-2">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 ">
          <img
            src={portraitImage}
            alt="Lij Temesgen"
            className="rounded-lg shadow-lg transition-transform duration-500 border-4 border-transparent duration-300 grayscale hover:filter-none  hover:border-red-600 transition"
          />
        </div>

        {/* Right Side - Text */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-red-500">
            About Lij Temesgen Melese
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6 ">
            Lij Temesgen Melese, born in Shiro Meda, Addis Ababa, is a
            world-renowned choreographer and cultural ambassador. From walking
            hours to theaters in his youth to performing at prestigious
            international stages, his life has been a testament to resilience
            and artistic brilliance.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Having honed his skills at Ethiopia's Children’s and Youth Theater,
            and later at the Hager Feker Theater, Lij Temesgen has
            revolutionized Ethiopian dance through innovative stage productions,
            musicals, and the promotion of cultural heritage. His groundbreaking
            works include founding
            <span className="text-red-500"> Ye Temesgen Lijoch Movement</span>,
            a platform for Ethiopian cultural expression.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            With over 500 video projects, international awards, and
            collaborations with renowned artists like Rophnan, Lij Temesgen
            continues to inspire generations, bridging Ethiopia’s rich
            traditions with contemporary art.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
