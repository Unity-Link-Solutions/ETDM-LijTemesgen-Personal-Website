import React from "react";
import temesgenImage from "../../assets/images/PersonalPhoto/hero.jpg";

const TimelineSection: React.FC = () => {
  return (
    <section id="timeline-section" className="bg-[#121212] text-white">
      <div className="w-full h-12 bg-african-pattern-1 brightness-95 transition-opacity duration-500 hover:opacity-100 opacity-80 animate-pulse"></div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center py-16 px-6 lg:px-20 lg:items-start">
        {/* Timeline Section */}
        <div className="lg:w-2/3 lg:pr-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-red-500 mb-6">
            The Journey of Lij Temesgen
          </h2>
          <ul className="space-y-8">
            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Early Life</h3>
                <p className="text-gray-300 mt-2">
                  Lij Temesgen was born in Addis Ababa and showed artistic
                  talent at a young age, immersing himself in Ethiopia's
                  traditional music and culture.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Rise to Fame</h3>
                <p className="text-gray-300 mt-2">
                  After years of dedication, Lij Temesgen captivated audiences
                  with his unique blend of Ethiopian traditional music and
                  modern styles.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Cultural Ambassador</h3>
                <p className="text-gray-300 mt-2">
                  Lij Temesgen has become a cultural ambassador, spreading
                  Ethiopian heritage and art across the globe through his music
                  and performances.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/3 mt-12 lg:mt-0">
          <img
            src={temesgenImage}
            alt="Artist"
            className="rounded-lg shadow-lg transition-transform duration-500 border-4 border-transparent duration-300 grayscale hover:filter-none  hover:border-red-600 transition"
          />
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
